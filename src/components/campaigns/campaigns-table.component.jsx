import React from 'react';
import { StatusComponent } from '../../shared/components/status.component';
import Moment from 'react-moment';
import moment from 'moment';

export const CampaignsTableComponent = ({ list, users }) => {

   const getUserName = (userID) => {
      let user = users.find(x => x.id.toString() === userID.toString());
      return (user && user.name) || 'Unknown User';
   }
   const getStatus = (campaign) => {
      return (moment() >= moment(campaign.startDate) && moment() <= moment(campaign.endDate))
   }
   const kFormatter = (num) => {
      return Math.abs(num) > 999 ? Math.sign(num) * ((Math.abs(num) / 1000).toFixed(1)) + 'k' : Math.sign(num) * Math.abs(num)
   }
   return (
      <div className="table-responsive mb-5">
         <table className="table">
            <thead>
               <tr className='table-header'>
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
                  list && list.length ? list.map((item, index) => {
                     return (
                        <tr key={index}>
                           <td>
                              {item.name}
                           </td>
                           <td>
                              {getUserName(item.userId)}
                           </td>
                           <td>
                              <Moment format="MM/DD/YYYY">
                                 {item.startDate}
                              </Moment>
                           </td>
                           <td>
                              <Moment format="MM/DD/YYYY">
                                 {item.endDate}
                              </Moment>
                           </td>
                           <td>
                              <StatusComponent active={getStatus(item)} />
                           </td>
                           <td>
                              {kFormatter(item.budget || item.Budget)} USD
                           </td>
                        </tr>
                     )
                  })
                     : <tr>
                        <td colSpan='6' align="center">
                           No Campaigns available!!
                        </td>
                     </tr>
               }
            </tbody>
         </table>
      </div>
   );
}