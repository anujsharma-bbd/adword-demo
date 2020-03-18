import React from 'react';
import { StatusComponent } from '../../shared/components/status.component';

export const CampaignsTableComponent = ({list}) => {
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
   );
}