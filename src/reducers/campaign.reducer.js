import { initialState } from "../store/initial-state";
import { ActionTypes } from "../actions/action-types";
import produce from 'immer';

export const CampaignReducer = produce((state = initialState, action) => {
   switch (action.type) {
      case ActionTypes.ADD_CAMPAIGN_INTO_LIST:
         state.campaignsList.push(...action.payload);
         state.filters = {};
         break;
      case ActionTypes.ADD_USERS:
         state.users.push(...action.payload);
         break;
      case ActionTypes.SET_FILTERS:
         state.filters = { ...state.filters, ...action.payload };
         break;
      default:
         return state;
   }
});