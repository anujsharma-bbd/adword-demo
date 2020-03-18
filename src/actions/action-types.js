export const ActionTypes = {
   GET_CAMPAIGNS_LIST: 'GET_CAMPAIGNS_LIST',
   ADD_CAMPAIGN_INTO_LIST: 'ADD_CAMPAIGN_INTO_LIST',
   FETCH_USERS: 'FETCH_USERS',
   ADD_USERS: 'ADD_USERS',
   USER_FETCH_ERROR: 'USER_FETCH_ERROR',
   SHOW_LOADER: 'SHOW_LOADER',
   HIDE_LOADER: 'HIDE_LOADER'
};
export const getAction = (actionType, payload) => ({ type: actionType, payload });