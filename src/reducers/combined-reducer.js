import { combineReducers } from 'redux';
import { CampaignReducer } from './campaign.reducer';
import { SharedReducer } from '../shared/shared-reducer';

export const combinedReducer = combineReducers({
   campaignModel: CampaignReducer,
   sharedModel: SharedReducer
});