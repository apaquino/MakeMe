import AppDispatcher from '../dispatcher/AppDispatcher';
import { AppActionTypes } from '../constants/AppActionTypes';
import { EventEmitter } from "events";

const CHANGE_EVENT = 'CHANGE_EVENT';

// MOCK Data.  Normally from a database but will mock/mimick JSON results from a DB
import { mockUsers as users } from '../../data/mockUsers';

// Application state
let _name = "Armand";
let _isLoggedIn = false;
let _currentUserId = "";


class AppStore extends EventEmitter {
  constructor(props) {
    super(props);

    AppDispatcher.register(action => {
      switch (action.actionType) {
      case AppActionTypes.SET_NAME:
        _name = action.name;
        this.emit(CHANGE_EVENT);
        break;
      default:
        break;
      }
    });
  }
  // getters
  getName() {
    return _name;
  }
  // listeners
  startListening(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  stopListening(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
}

export default new AppStore();
