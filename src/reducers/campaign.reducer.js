import produce from 'immer';
import { initialState } from "../store/initial-state";
import { ActionTypes } from "../actions/action-types";
import environment from '../environments/environment';
import { getStorage, setStorage } from '../utils/';

let persistedData = getStorage(environment.storageCampaignKey);

export const CampaignReducer = produce((state = persistedData || initialState, action) => {
   let isInitiation = false;
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
         isInitiation = true;
         setStorage(environment.storageCampaignKey, state);
         return state;
   }
   if (!isInitiation)
      setStorage(environment.storageCampaignKey, state);
});