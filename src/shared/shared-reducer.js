import { SharedActionTypes } from "./actions/action-types";
import { SharedState } from "./initial-state.js";
import produce from 'immer';
import environment from '../environments/environment';
import { getStorage, setStorage } from '../utils/';

let persistedData = getStorage(environment.storageSharedKey);

export const SharedReducer = produce((state = persistedData || SharedState, action) => {
   let isInitiation = false;
   switch (action.type) {
      case SharedActionTypes.SHOW_LOADER:
         state.isLoaderShown = true;
         break;
      case SharedActionTypes.HIDE_LOADER:
         state.isLoaderShown = false;
         break;
      default:
         isInitiation = true;
         setStorage(environment.storageSharedKey, state);
         return state;
   }
   if (!isInitiation)
      setStorage(environment.storageSharedKey, state);
})