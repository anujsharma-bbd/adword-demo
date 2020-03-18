import { combineReducers } from 'redux';
import { CampaignReducer } from './campaign.reducer';

export const combinedReducer = combineReducers({
   campaignModel: CampaignReducer
});