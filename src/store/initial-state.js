export const initialState = {
   users: [],
   filters: null,
   campaignsList: [
      { id: 1, name: 'Campaign 1', userId: 1, startDate: '12/02/2012', endDate: '12/03/2012', budget: '3k USD' },
      { id: 2, name: 'Campaign 2', userId: null, startDate: '12/02/2013', endDate: '12/05/2013', budget: '3k USD' },
      { id: 3, name: 'Campaign 3', userId: 2, startDate: '12/02/2014', endDate: '12/06/2014', budget: '3k USD' },
      { id: 4, name: 'Campaign 4', userId: 3, startDate: '12/02/2015', endDate: '12/09/2020', budget: '3k USD' }]
};