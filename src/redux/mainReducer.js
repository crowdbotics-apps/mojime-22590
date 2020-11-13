import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import SignIn11172557Reducer from '../features/SignIn11172557/redux/reducers'
import Dashboard15172554Reducer from '../features/Dashboard15172554/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
SignIn11172557: SignIn11172557Reducer,
Dashboard15172554: Dashboard15172554Reducer,

});