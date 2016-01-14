import AppDispatcher from '../dispatcher/AppDispatcher';
import { AppActionTypes } from '../constants/AppActionTypes';

const AppActions = {
  authenticateUser(user) {
    AppDispatcher.dispatch({
      actionType: AppActionTypes.AUTHENTICATE_USER,
      user
    });
  },
  createNewUser(newuser){
    AppDispatcher.dispatch({
      actionType: AppActionTypes.CREATE_NEWUSER,
      newuser
    });
  },
  getPlaylistRoutines(){
    AppDispatcher.dispatch({
      actionType: AppActionTypes.CREATE_NEWUSER
    });
  }
};

export default AppActions;
