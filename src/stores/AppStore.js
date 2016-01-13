import AppDispatcher from '../dispatcher/AppDispatcher';
import { AppActionTypes } from '../constants/AppActionTypes';
import { EventEmitter } from "events";
import { EVENTS } from "../constants/EVENT_CONSTANTS";


const CHANGE_EVENT = 'CHANGE_EVENT';

// MOCK Data.  Normally from a database but will mock/mimick JSON results from a DB
let users = require('../../data/mockUsers').mockUsers;

// Application state
let _isLoggedIn = false;
let _currentUserId = "";

// helper functions
const _verifyUser = ({username, password}) => {
  console.log("app store called")
  const user = users.find(user => user.username === username);
  console.log(user)
  if(!user || user.password !== password) {
    return false;
  } else {
    return true;
  }
};

const _createUser = ({username, email, password}) => {
  const duplicateEmail = users.findIndex(user => user.email === email);
  const duplicateUsername = users.findIndex(user => user.username === username);

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

}

const createUser = () => {

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

  getDBUsers() {
    return users;
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
