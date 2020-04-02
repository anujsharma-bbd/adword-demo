import produce from 'immer';
import { initialState } from "../store/initial-state";
import { ActionTypes } from "../actions/action-types";
import environment from '../environments/environment';
import { getStorage, setStorage } from '../utils/';

let persistedData = getStorage(environment.storageCampaignKey);

export const CampaignReducer = (state = persistedData || initialState, action) => {
   return produce(state, (draft) => {
      let isInitiation = false;
      switch (action.type) {
         case ActionTypes.ADD_CAMPAIGN_INTO_LIST:
            draft.campaignsList.push(...action.payload);
            draft.filters = {};
            break;
         case ActionTypes.ADD_USERS:
            draft.users.push(...action.payload);
            break;
         case ActionTypes.SET_FILTERS:
            draft.filters = { ...state.filters, ...action.payload };
            break;
         case ActionTypes.ADD_CAMPAIGN_SAVE_CHANGES:
            draft.addCampaign = { ...state.addCampaign, ...action.payload };
            break;
         default:
            isInitiation = true;
            return draft;
      }
      if (!isInitiation)
         setStorage(environment.storageCampaignKey, draft);
   })
};