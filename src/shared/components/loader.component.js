import React from 'react';
import { connect } from 'react-redux';

class LoaderComponent extends React.Component {
   render() {
      const { isLoaderShown } = this.props.model;
      return (
         isLoaderShown ? <div className='screen-loader'></div> : null
      );
   }
}
const mapStateToProps = (state) => {
   return {
      model: state.sharedModel
   }
}
export default connect(mapStateToProps)(LoaderComponent);