import AppDispatcher from '../dispatcher/AppDispatcher';
import { AppActionTypes } from '../constants/AppActionTypes';

const AppActions = {
  setName(name) {
    AppDispatcher.dispatch({
      actionType: AppActionTypes.SET_NAME,
      name
    });
  },
  AppDispatcher.dispatch({
    actionType: AppActionTypes.AUTHENTICATE_USER,
    user
  })
};

export default AppActions;
