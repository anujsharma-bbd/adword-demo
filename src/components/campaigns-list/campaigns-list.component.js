
import React from 'react';
import { connect } from 'react-redux';

class CampaignsListComponent extends React.Component {
   constructor(props) { super(props); }
   render() {
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
                                    {item.active.toString()}
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
export default connect(mapStateToProps)(CampaignsListComponent);