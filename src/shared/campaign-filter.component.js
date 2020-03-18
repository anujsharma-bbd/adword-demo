import { connect } from "react-redux";
import React from 'react';

class CampaignFilterComponent extends React.Component {
   constructor(props) { super(props); }
   render() {
      return (
         <div className='row'>

         </div>
      );
   }
}
const mapStateToProps = (state) => {
   return {
      model: state.campaignModel
   };
}
export default connect(mapStateToProps)(CampaignFilterComponent);