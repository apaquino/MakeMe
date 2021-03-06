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
  addRoutineToPlaylist(id){
    AppDispatcher.dispatch({
      actionType: AppActionTypes.ADD_ROUTINE_TO_PLAYLIST,
      id
    });
  },
  deleteRoutineFromPlaylist(id){
    AppDispatcher.dispatch({
      actionType: AppActionTypes.DELETE_ROUTINE_FROM_PLAYLIST,
      id
    });
  },
  toggleTrainerFavorite(trainerId){
    AppDispatcher.dispatch({
      actionType: AppActionTypes.TOGGLE_TRAINER_FAVORITE,
      trainerId
    });
  },
  addRoutineToFavorites(id){
    AppDispatcher.dispatch({
      actionType: AppActionTypes.ADD_ROUTINE_TO_FAVORITES,
      id
    });
  },
};

export default AppActions;
