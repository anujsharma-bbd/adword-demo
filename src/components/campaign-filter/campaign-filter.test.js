import React from 'react';
import { shallow } from 'enzyme'
import configureMockStore from "redux-mock-store";

import { FilterComponent } from './campain-filter.component';
import moment from 'moment';

const setFiltersSpy = jest.fn();
const setup = () => {
   const mockStore = configureMockStore();
   const store = mockStore({});
   const enzymeWrapper = shallow((<FilterComponent setFilters={setFiltersSpy} store={store} />));
   return enzymeWrapper;
}
describe('Campaign Filter Component :', () => {
   let wrapper;
   beforeEach(() => {
      wrapper = setup();
      setFiltersSpy.mockClear();
   });
   it('should render the componnet', () => {
      expect(wrapper).not.toBeNull();
   })
   it('should contain 3 fields to filter', () => {
      let btn = wrapper.find('#searchBtn'), startDate = wrapper.find('#startDate'), endDate = wrapper.find('#endDate');
      expect(btn).toBeDefined();
      expect(startDate).toBeDefined();
      expect(endDate).toBeDefined();
   })
   it('should change Start-End-Name value in state after selection', () => {
      let today = moment();
      let instance = wrapper.instance();
      instance.onStartChange(today);
      let tomorrow = today.add(1, 'day');
      instance.onEndChange(tomorrow);
      let DAT = tomorrow.add(1, 'day');
      instance.onSearchNameChange({ target: { value: DAT } });
      expect(wrapper.state('startDate')).toEqual(today);
      expect(wrapper.state('endDate')).toEqual(tomorrow);
      expect(wrapper.state('byName')).toEqual(DAT);
   })
   it('should check validations on search', () => {
      wrapper.find('#searchBtn').simulate('click');
      expect(setFiltersSpy).toHaveBeenCalledWith({ startDate: null, endDate: null, byName: '' });
   })
   
   it('should not call callback when only startdate is available', () => {
      let today = moment();
      let instance = wrapper.instance();
      instance.onStartChange(today);
      wrapper.find('#searchBtn').simulate('click');
      expect(setFiltersSpy).not.toHaveBeenCalled();
   })
   
   it('should not call callback when only enddate is available', () => {
      let today = moment();
      let instance = wrapper.instance();
      instance.onEndChange(today);
      wrapper.find('#searchBtn').simulate('click');
      expect(setFiltersSpy).not.toHaveBeenCalled();
   })
})
