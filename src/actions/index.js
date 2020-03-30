import { getAction, ActionTypes } from "./action-types";
import { SharedActionTypes } from "../shared/actions/action-types";
import { Constants } from "../shared/constants";

export const getUsers = () => {
   return (dispatch) => {
      dispatch(getAction(SharedActionTypes.SHOW_LOADER));
      fetch(Constants.API_URLS.USERS)
         .then(async res => {
            const result = await res.json();
            dispatch(getAction(ActionTypes.ADD_USERS, result));
         })
         .catch(err => {
            dispatch(getAction(ActionTypes.USER_FETCH_ERROR));
         })
         .finally(s => {
            dispatch(getAction(SharedActionTypes.HIDE_LOADER));
         });
   }
}

export const addCampaigns = (payload) => {
   return (dispatch) => {
      dispatch(getAction(ActionTypes.ADD_CAMPAIGN_INTO_LIST, payload));
   }
}
export const saveChanges = (payload) => {
   return (dispatch) => {
      dispatch(getAction(ActionTypes.ADD_CAMPAIGN_SAVE_CHANGES, payload));
   }
}
export const SetFilters = (payload) => {
   return dispatch => {
      dispatch(getAction(ActionTypes.SET_FILTERS, payload));
   };
}