import { initialState } from "../store/initial-state";
import { ActionTypes } from "../actions/action-types";

export const CampaignReducer = (state = initialState, action) => {
   switch (action.type) {
      case ActionTypes.ADD_CAMPAIGN_INTO_LIST:
         return {
            ...state,
            campaignsList: [...state.campaignsList, ...action.payload]
         };
      default:
         return state;
   }
}