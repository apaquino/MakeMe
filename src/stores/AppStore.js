import AppDispatcher from '../dispatcher/AppDispatcher';
import { AppActionTypes } from '../constants/AppActionTypes';
import { EventEmitter } from "events";
import { EVENTS } from "../constants/EVENT_CONSTANTS";

const CHANGE_EVENT = 'CHANGE_EVENT';

// MOCK Data.  Normally from a database but will mock/mimick JSON results from a DB
let users = require('../../data/mockUsers').mockUsers;

// Mock Data.  Using import to make it read-only
import { MOCK_ROUTINE_DATABASE, TRAINER_MOCK_DATABASE } from '../../data/mockDatabase';

// Application state
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
    const playlistIds = users.find(user => user.id === _currentUserId).playlist
                             .map(routine => routine.playlistId);
    // return MOCK_ROUTINE_DATABASE.filter(routine => playlistIds.includes(routine.id));
    // get routines in order
    return playlistIds.map(id => MOCK_ROUTINE_DATABASE.find(routine => routine.id === id));

  }

  getRoutineDetails(id) {
    return MOCK_ROUTINE_DATABASE.find(routine => routine.id === id);
  }
  
  getTrainerDetails(id) {
    return TRAINER_MOCK_DATABASE.find(trainer => trainer.id === id);
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
