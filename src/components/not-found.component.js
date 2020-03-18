import React from 'react';

export const notFoundComponent = () => {
   return (
      <>
         <div className="d-flex align-items-center justify-content-center" style={{ height: '100vh' }}>
            <div className='text-center'>
               <div className='row'>
                  <div className='col-sm-12'>
                     <h1>
                        404
                  </h1>
                  </div>
               </div>
               <div className='row'>
                  <div className='col-sm-12'>
                     <h3>
                        Page not found !
                  </h3>
                  </div>
               </div>
            </div>
         </div>
      </>
   );
};