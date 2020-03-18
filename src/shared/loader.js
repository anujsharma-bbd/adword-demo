import React from 'react';
import { connect } from 'react-redux';

class LoaderComponent extends React.Component {

   render() {
      return (
         <div className='screen-loader'>

         </div>
      );
   }
}
const mapStateToProps = (state) => {
   return {
      sharedModel: state.sharedModel
   }
}
export default connect(mapStateToProps)(LoaderComponent);