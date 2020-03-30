import { SharedActionTypes } from "./actions/action-types";
import { SharedState } from "./initial-state.js";
import produce from 'immer';

export const SharedReducer = produce((state = SharedState, action) => {
   switch (action.type) {
      case SharedActionTypes.SHOW_LOADER:
         state.isLoaderShown = true;
         break;
      case SharedActionTypes.HIDE_LOADER:
         state.isLoaderShown = false;
         break;
      default:
         return state;
   }
})