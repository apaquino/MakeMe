import AppDispatcher from '../dispatcher/AppDispatcher';
import { AppActionTypes } from '../constants/AppActionTypes';
import { EventEmitter } from "events";

const CHANGE_EVENT = 'CHANGE_EVENT';

let _name = "Armand";

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
