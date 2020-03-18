
import React from 'react';
import { connect } from 'react-redux';

import { getUsers, addCampaigns } from '../../actions/';
import { bindActionCreators } from 'redux';
import { StatusComponent } from '../../shared/components/status.component';

class CampaignsListComponent extends React.Component {
   constructor(props) {
      super(props);
      this.collectUsers = this.collectUsers.bind(this);
      this.exposeAddition = this.exposeAddition.bind(this);
      this.AddCampaigns = this.AddCampaigns.bind(this);
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
   render() {
      console.log(this.props.model.users);
      return (
         <div>
            <div className="table-responsive">
               <table className="table">
                  <thead>
                     <tr>
                        <th>
                           Name
                        </th>

                        <th>
                           User Name
                        </th>

                        <th>
                           Start Date
                        </th>

                        <th>
                           End Date
                        </th>

                        <th>
                           Active
                        </th>

                        <th>
                           Budget
                        </th>
                     </tr>
                  </thead>
                  <tbody>
                     {
                        this.props.model.campaignsList.map((item, index) => {
                           return (
                              <tr key={index}>
                                 <td>
                                    {item.campaignName}
                                 </td>
                                 <td>
                                    {item.userName}
                                 </td>
                                 <td>
                                    {item.startDate}
                                 </td>
                                 <td>
                                    {item.endDate}
                                 </td>
                                 <td>
                                    <StatusComponent active={item.active} />
                                 </td>
                                 <td>
                                    {item.budget}
                                 </td>
                              </tr>
                           )
                        })
                     }
                  </tbody>
               </table>
            </div>
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
      addCampaigns: addCampaigns
   }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(CampaignsListComponent);