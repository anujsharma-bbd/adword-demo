import { SharedActionTypes } from "./actions/action-types";
import { SharedState } from "./initial-state.js";
import produce from 'immer';
import environment from '../environments/environment';
import { getStorage, setStorage } from '../utils/';

let persistedData = getStorage(environment.storageSharedKey);

export const SharedReducer = (state = persistedData || SharedState, action) => {
   return produce(state, draft => {
      let isInitiation = false;
      switch (action.type) {
         case SharedActionTypes.SHOW_LOADER:
            draft.isLoaderShown = true;
            break;
         case SharedActionTypes.HIDE_LOADER:
            draft.isLoaderShown = false;
            break;
         default:
            isInitiation = true;
            return draft;
      }
      if (!isInitiation)
         setStorage(environment.storageSharedKey, draft);
   });
};