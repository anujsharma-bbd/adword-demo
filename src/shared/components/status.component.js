import React from 'react';

export const StatusComponent = ({active}) => {
   return (
      active ? <span className='active'>Active</span> : <span className='inactive'>Inactive</span>
   );
}