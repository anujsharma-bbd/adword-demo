import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { SetFilters } from '../../actions';
import { InputGroup, Input, InputGroupAddon, InputGroupText } from 'reactstrap';
import ReactDatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

class FilterComponent extends React.Component {
   constructor(props) {
      super(props);
      this.state = { startDate: null, endDate: null };
      this.setFilters = this.setFilters.bind(this);
      this.onStartChange = this.onStartChange.bind(this);
      this.onEndChange = this.onEndChange.bind(this);
   }
   setFilters() {

   }
   onStartChange(val) {
      this.setState({ startDate: val, endDate: null });
   }
   onEndChange(val) {
      this.setState({ endDate: val });
   }
   render() {
      const { startDate, endDate } = this.state;
      return (
         <div className='row mb-1'>
            <div className='col-sm-2'>
               <ReactDatePicker placeholderText='Start Date' className='form-control' selected={startDate} onChange={this.onStartChange} />
            </div>
            <div className='col-sm-2'>
               <ReactDatePicker placeholderText='End Date' className='form-control' selected={endDate} onChange={this.onEndChange} />
            </div>
            <div className='col-sm-5'>

            </div>

            <div className='col-sm-3'>
               <InputGroup>
                  <Input placeholder="Search by name" />
                  <InputGroupAddon addonType="append">
                     <InputGroupText>Search</InputGroupText>
                  </InputGroupAddon>
               </InputGroup>

            </div>
         </div>
      );
   }
}

const mapStateToProps = (state) => {
   return {
      model: state.campaignModel
   }
}
const mapDispatchToProps = (dispatch) => {
   return bindActionCreators({
      SetFilters: SetFilters
   }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(FilterComponent);