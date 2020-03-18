import { initialState } from "../store/initial-state";
import { ActionTypes } from "../actions/action-types";

export const CampaignReducer = (state = initialState, action) => {
   switch (action.type) {
      case ActionTypes.ADD_CAMPAIGN_INTO_LIST:
         return {
            ...state,
            campaignsList: [...state.campaignsList, ...action.payload]
         };
      case ActionTypes.ADD_USERS:
         return {
            ...state,
            users: [...state.users, ...action.payload]
         };
         
      case ActionTypes.SET_FILTERS:
         return {
            ...state,
            users: [...state.users, ...action.payload]
         };
      default:
         return state;
   }
}