import { SharedActionTypes } from "./actions/action-types";
import { SharedState } from "./initial-state.js";

export const SharedReducer = (state = SharedState, action) => {
   switch (action.type) {
      case SharedActionTypes.SHOW_LOADER:
         return {
            ...state,
            isLoaderShown: true
         }
      case SharedActionTypes.HIDE_LOADER:
         return {
            ...state,
            isLoaderShown: false
         }
      default:
         return state;
   }
}