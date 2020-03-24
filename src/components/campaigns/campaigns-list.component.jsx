
import React from 'react';
import { connect } from 'react-redux';

import { getUsers, addCampaigns, SetFilters } from '../../actions';
import { bindActionCreators } from 'redux';
import { CampaignsTableComponent } from './campaigns-table.component';
import FilterComponent from '../campaign-filter/campain-filter.component';
import moment from 'moment';
import AddCampaignComponent from '../../shared/components/add-campaign.component';

class CampaignsListComponent extends React.Component {
   constructor(props) {
      super(props);
      this.collectUsers = this.collectUsers.bind(this);
      this.exposeAddition = this.exposeAddition.bind(this);
      this.AddCampaigns = this.AddCampaigns.bind(this);
      this.onChangeFilters = this.onChangeFilters.bind(this);
      this.state = { userLoadingMessage: '' };
   }
   componentDidMount() {
      this.collectUsers();
      this.exposeAddition();
   }
   collectUsers() {
      this.props.getUsers();
   }
   exposeAddition() {
      window.AddCampaigns = this.AddCampaigns;
   }
   AddCampaigns(campaignsList) {
      this.props.addCampaigns(campaignsList);
   }
   onChangeFilters(filterValue) {
      this.props.SetFilters(filterValue);
   }
   render() {
      return (
         <div>
            <br />
            <br />
            <br />
            <FilterComponent setFilters={this.onChangeFilters} />
            <CampaignsTableComponent list={this.props.filteredList} users={this.props.model.users} />
            <AddCampaignComponent />
         </div >
      );
   }
}
const getFilteredList = (list, filter, users) => {
   let filtered = [...list];
   if (!filter) { return filtered; }
   if (filter.startDate && filter.endDate) {
      filtered = filtered.filter(item => {
         return (
            (moment(item.startDate) >= moment(filter.startDate) && moment(item.startDate) <= moment(filter.endDate))
            ||
            (moment(item.endDate) >= moment(filter.startDate) && moment(item.endDate) <= moment(filter.endDate)))
      })
   }
   if (filter.byName) {
      filtered = filtered.filter(item => item.name.toLowerCase().indexOf(filter.byName.toLowerCase()) !== -1);
   }
   return filtered;
}
const mapStateToProps = (state) => {
   return {
      model: state.campaignModel,
      filteredList: getFilteredList(state.campaignModel.campaignsList, state.campaignModel.filters, state.campaignModel.users)
   };
}
const mapDispatchToProps = (dispatch) => {
   return bindActionCreators({
      getUsers: getUsers,
      addCampaigns: addCampaigns,
      SetFilters: SetFilters
   }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(CampaignsListComponent);