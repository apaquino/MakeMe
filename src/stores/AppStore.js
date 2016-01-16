import AppDispatcher from '../dispatcher/AppDispatcher';
import { AppActionTypes } from '../constants/AppActionTypes';
import { EventEmitter } from "events";
import { EVENTS } from "../constants/EVENT_CONSTANTS";

const CHANGE_EVENT = 'CHANGE_EVENT';

// MOCK Data.  Normally from a database but will mock/mimick JSON results from a DB
// Mutations/side-effects will be allowed in this data structure
let users = require('../../data/mockUsers').mockUsers;

// Mock Data.  Using import to make it read-only
import { MOCK_ROUTINE_DATABASE, TRAINER_MOCK_DATABASE } from '../../data/mockDatabase';

// Application state, most things can be looked up from _currentUserId
let _isLoggedIn = false;
let _currentUserId = "";

// helper functions, usually will call a ORM or other API (e.g parse).  For POC purposes only.
const _verifyUser = ({username, password}) => {
  const user = users.find(user => user.username.toLowerCase() === username.toLowerCase());
  if(!user || user.password !== password) {
    return false;
  } else {
    return true;
  }
};

const _createUser = ({username, email, password}) => {
  const duplicateEmail = users.findIndex(user => user.email.toLowerCase() === email.toLowerCase()),
        duplicateUsername = users.findIndex(user => user.username.toLowerCase() === username.toLowerCase());

  if (duplicateEmail < 0 && duplicateUsername < 0) {
    users = users.concat({
      id: Date.now(),
      username,
      email,
      password,
      playlist: [],
      favoriteRoutines: [],
      favoriteTrainers: []
    });
    return true;
  }
  return false;
};

const _getCurrentUserIndex = () => {
  return users.findIndex(user => user.id === _currentUserId);
};

const _addToUserPlaylist = (id) => {
  const userIdIndex = _getCurrentUserIndex(),
        routineId = MOCK_ROUTINE_DATABASE.find(routine => routine.id === id).id,
        newRoutineToAdd = {
          id: Date.now(),
          playlistId: routineId
        };
  // get user playlist and concat new routine
  users[userIdIndex].playlist = users[userIdIndex].playlist.concat(newRoutineToAdd);
  return true;
};

const _toggleFavoriteTrainer = (trainerId) => {
  const userIdIndex = _getCurrentUserIndex(),
        favTrainerIds = users[userIdIndex].favoriteTrainers,
        isFavorite = favTrainerIds.includes(trainerId);

  if (isFavorite) {
    // find index of routineId, practice immutable.
    const favTrnIdx = favTrainerIds.indexOf(trainerId);
    users[userIdIndex].favoriteTrainers = [...favTrainerIds.slice(0, favTrnIdx),...favTrainerIds.slice(favTrnIdx + 1)];
  } else {
    // concat into array
    users[userIdIndex].favoriteTrainers = favTrainerIds.concat(trainerId);
  }
};

class AppStore extends EventEmitter {
  constructor(props) {
    super(props);

    AppDispatcher.register(action => {
      switch (action.actionType) {
      case AppActionTypes.AUTHENTICATE_USER:
        const validUser = _verifyUser(action.user);
        if(!validUser) {
          _isLoggedIn = false;
          _currentUserId = "";
        } else {
          _isLoggedIn = true;
          _currentUserId = users.find(user => user.username === action.user.username).id;
        }
        this.emit(EVENTS.USER_AUTHENTICATED);
        break;
      case AppActionTypes.CREATE_NEWUSER:
        const success = _createUser(action.newuser);
        if (success) {
          _isLoggedIn = true;
          _currentUserId = users.find(user => user.username === action.newuser.username).id;
        }
        this.emit(EVENTS.USER_CREATED);
        break;
      case AppActionTypes.ADD_ROUTINE_TO_PLAYLIST:
        // TODO more error checking since functions returns a boolean.
        _addToUserPlaylist(action.id);
        this.emit(EVENTS.ROUTINE_ADDED_TO_PLAYLIST);
        break;
      case AppActionTypes.TOGGLE_TRAINER_FAVORITE:
        // TODO error checking
        _toggleFavoriteTrainer(action.trainerId);
        this.emit(EVENTS.TRAINER_FAVORITE_TOGGLED);
        break;
      case AppActionTypes.ADD_ROUTINE_TO_FAVORITES:
        // STILL WORK IN PROGRESS
        const userIdIndex = _getCurrentUserIndex(),
              favRoutineIds = users[userIdIndex].favoriteRoutines,
              isFavorite = favRoutineIds.includes(action.id);
        // add only if not in favorites.  No dup favorites
        if (!isFavorite) {
          users[userIdIndex].favoriteRoutines = favRoutineIds.concat(action.id);
        }
        console.log(users[userIdIndex].favoriteRoutines);
        this.emit(EVENTS.ROUTINE_ADDED_TO_FAVORITES);
        break;
      default:
        break;
      }
    });
  }
  // getters
  getCurentUserId() {
    return _currentUserId;
  }

  getIsLoggedIn() {
    return _isLoggedIn;
  }

  getPlaylistRoutines() {
    // get user playlist
    const playlist = users.find(user => user.id === _currentUserId).playlist;
    // get routines in order
    return playlist.map(routineObj =>
      MOCK_ROUTINE_DATABASE.find(routine =>
        routine.id === routineObj.playlistId
      )
    );
  }

  getSuggestedRoutines() {
    // get user playlist and get keys.
    const playlist = users.find(user => user.id === _currentUserId).playlist,
          playlistKeys = playlist.map(playlistObj => playlistObj.playlistId);
    // get up to 5 routines NOT in playlist
    return MOCK_ROUTINE_DATABASE.filter(routine => !playlistKeys.includes(routine.id)).slice(0,5);
  }

  getRoutineDetails(id) {
    return MOCK_ROUTINE_DATABASE.find(routine => routine.id === id);
  }

  getTrainerDetails(id) {
    return TRAINER_MOCK_DATABASE.find(trainer => trainer.id === id);
  }

  getTrainerRoutines(id) {
    const routineIds = TRAINER_MOCK_DATABASE.find(trainer => trainer.id === id).routines;
    return MOCK_ROUTINE_DATABASE.filter(routine => routineIds.includes(routine.id));
  }

  isTrainerFavorite(trainerId) {
    const favTrainerIds = users.find(user => user.id === _currentUserId).favoriteTrainers;
    return favTrainerIds.includes(trainerId);
  }

  getUserFavoriteRoutines() {
    const userIdIndex = _getCurrentUserIndex(),
          favRoutineIds = users[userIdIndex].favoriteRoutines;
    return MOCK_ROUTINE_DATABASE.filter(routine => favRoutineIds.includes(routine.id));
  }

  getUserFavoriteTrainers() {
    const userIdIndex = _getCurrentUserIndex(),
          favTrainerIds = users[userIdIndex].favoriteTrainers;
    return TRAINER_MOCK_DATABASE.filter(trainer => favTrainerIds.includes(trainer.id));
  }

  getCompletedRoutineDetails() {
    const userIdIndex = _getCurrentUserIndex(),
          completedRoutineDetails = users[userIdIndex]
                                      .completedRoutines.map(routine => {
                                          let routineObj = {
                                            completedDate: routine.completedDate,
                                            routine: MOCK_ROUTINE_DATABASE.find( r => r.id === routine.playlistId)
                                          };
                                          return routineObj;
                                      });
          // TODO make map function into a helper function
    return completedRoutineDetails;
  }

  // listeners
  startListening(event, callback) {
    this.on(event, callback);
  }

  stopListening(event, callback) {
    this.removeListener(event, callback);
  }
}

export default new AppStore();
