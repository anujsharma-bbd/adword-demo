import React from 'react';
import { connect } from 'react-redux';
import { Spinner } from 'reactstrap';

const LoaderComponent = (props) => {
   const { isLoaderShown } = props.model;
   return (
      isLoaderShown ? <div className='screen-loader'> <Spinner color="dark" /> </div> : null
   )
}
const mapStateToProps = (state) => {
   return {
      model: state.sharedModel
   }
}
export default connect(mapStateToProps)(LoaderComponent);