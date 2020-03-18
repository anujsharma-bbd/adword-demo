export const ActionTypes = {
   GET_CAMPAIGNS_LIST: 'GET_CAMPAIGNS_LIST',
   ADD_CAMPAIGN_INTO_LIST: 'ADD_CAMPAIGN_INTO_LIST',
   FETCH_USERS: 'FETCH_USERS',
   ADD_USERS: 'ADD_USERS',
   USER_FETCH_ERROR: 'USER_FETCH_ERROR',
   SET_FILTERS:'SET_FILTERS'
};
export const getAction = (actionType, payload) => ({ type: actionType, payload });