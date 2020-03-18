import { getAction } from "../../actions/action-types";
import { SharedActionTypes } from "./action-types";

export const setLoader = (payload) => {
   return (dispatch) => {
      dispatch(getAction(payload ? SharedActionTypes.SHOW_LOADER : SharedActionTypes.HIDE_LOADER));
   }
}