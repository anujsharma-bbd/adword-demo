import React from 'react';
import { StatusComponent } from '../../shared/components/status.component';
import Moment from 'react-moment';

export const CampaignsTableComponent = ({ list, users }) => {

   const getUserName = (userID) => {
      let user = users.find(x => x.id === userID);
      return (user && user.name) || 'Unknown User';
   }
   return (
      <div className="table-responsive">
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
                  list && list.map((item, index) => {
                     return (
                        <tr key={index}>
                           <td>
                              {item.campaignName}
                           </td>
                           <td>
                              {getUserName(item.userId)}
                           </td>
                           <td>
                              <Moment format="DD/MM/YYYY">
                                 {item.startDate}
                              </Moment>
                           </td>
                           <td>
                              <Moment format="DD/MM/YYYY">
                                 {item.endDate}
                              </Moment>
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
   );
}