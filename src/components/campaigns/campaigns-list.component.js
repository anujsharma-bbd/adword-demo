
import React from 'react';
import { connect } from 'react-redux';

import { getUsers, addCampaigns, SetFilters } from '../../actions';
import { bindActionCreators } from 'redux';
import { CampaignsTableComponent } from './campaigns-table.component';
import FilterComponent from '../campaign-filter/campain-filter.component';

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
      this.props.getUsers()
         .then((result) => {
            if (result) {

            }
         });
   }
   exposeAddition() {
      window.AddCampaigns = this.AddCampaigns;
   }
   AddCampaigns(campaignsList) {
      this.props.addCampaigns(campaignsList);
   }
   onChangeFilters(filterValue) {
      debugger
   }
   render() {
      return (
         <div>
            <br />
            <br />
            <br />
            <FilterComponent setFilters={this.onChangeFilters} />
            <CampaignsTableComponent list={this.props.model.campaignsList} />
         </div >
      );
   }
}
const mapStateToProps = (state) => {
   return {
      model: state.campaignModel
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