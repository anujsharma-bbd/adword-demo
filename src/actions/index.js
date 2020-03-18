import { getAction, ActionTypes } from "./action-types";
import { Constants } from "../shared/constants";

export const getUsers = () => {
   return (dispatch) => {
      return new Promise((resolve, reject) => {
         dispatch(getAction(ActionTypes.SHOW_LOADER));
         fetch(Constants.API_URLS.USERS)
            .then(async res => {
               const result = await res.json();
               dispatch(getAction(ActionTypes.ADD_USERS, result));
               resolve(true);
            })
            .catch(err => {
               dispatch(getAction(ActionTypes.USER_FETCH_ERROR));
               reject(false);
            })
            .finally(s => {
               dispatch(getAction(ActionTypes.HIDE_LOADER));
            });
      })
   }
}
export const addCampaigns = (payload) => {
   return (dispatch) => {
      dispatch(getAction(ActionTypes.ADD_CAMPAIGN_INTO_LIST, payload));
   }
}
export const  SetFilters = (payload) => {
   return dispatch => {
      dispatch(getAction(ActionTypes.SET_FILTERS, payload));
   };
}