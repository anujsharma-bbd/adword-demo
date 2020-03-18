export const initialState = {
   users: [],
   filters: null,
   campaignsList: [
      { campaignName: 'Campaign 1', userId: 1, startDate: '12/02/2012', endDate: '12/03/2012', active: true, budget: '3k USD' },
      { campaignName: 'Campaign 2', userId: null, startDate: '12/02/2013', endDate: '12/05/2013', active: true, budget: '3k USD' },
      { campaignName: 'Campaign 3', userId: 2, startDate: '12/02/2014', endDate: '12/06/2014', active: false, budget: '3k USD' },
      { campaignName: 'Campaign 4', userId: 3, startDate: '12/02/2015', endDate: '12/03/2015', active: true, budget: '3k USD' }]
};