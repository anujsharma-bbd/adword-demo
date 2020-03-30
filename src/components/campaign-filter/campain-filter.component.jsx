import React from 'react';
import { connect } from 'react-redux';
import { InputGroup, Input, InputGroupAddon, Button } from 'reactstrap';
import ReactDatePicker from 'react-datepicker';
import toastr from 'toastr';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import "react-datepicker/dist/react-datepicker.css";
import moment from 'moment';


export class FilterComponent extends React.Component {
   constructor(props) {
      super(props);
      if (props && props.model && props.model.filters) {
         let { startDate: startDateP, endDate: endDateP, byName: byNameP } = props.model.filters;
         startDateP = startDateP ? Date.parse(startDateP) : null;
         endDateP = endDateP ? Date.parse(endDateP) : null;
         this.state = { startDate: startDateP || null, endDate: endDateP || null, byName: byNameP || '' };
      } else {
         this.state = { startDate: null, endDate: null, byName: '' };
      }
      this.onStartChange = this.onStartChange.bind(this);
      this.onEndChange = this.onEndChange.bind(this);
      this.onSearchNameChange = this.onSearchNameChange.bind(this);
      this.searchStart = this.searchStart.bind(this);
      toastr.options = {
         positionClass: 'toast-top-full-width',
         hideDuration: 300,
         timeOut: 5000
      };
      toastr.clear();
   }
   onStartChange(val) {
      this.setState({ startDate: val, endDate: null });
   }
   onEndChange(val) {
      toastr.clear();
      if (moment(val) < moment(this.state.startDate)) {
         toastr.error('End Date should be greater than Start Date.');
         this.setState({ endDate: null });
         return;
      }
      this.setState({ endDate: val });
   }
   onSearchNameChange(val) {
      this.setState({ byName: val.target.value });
   }
   searchStart() {
      toastr.clear();
      if ((this.state.startDate && !this.state.endDate) || (this.state.endDate && !this.state.startDate)) {
         toastr.error('Please select both dates.');
         return;
      }
      this.props.setFilters(
         {
            startDate: this.state.startDate,
            endDate: this.state.endDate,
            byName: this.state.byName
         });
   }
   render() {
      const { startDate, endDate, byName } = this.state;

      return (
         <div className='row mb-1'>
            <div className='col-sm-7 filter-inputs'>
               <InputGroup>
                  <ReactDatePicker autoComplete='off' id='startDate' isClearable dateFormat="MM/dd/yyyy" placeholderText='Start Date' className='form-control mr-1' selected={startDate} onChange={this.onStartChange} />
                  <ReactDatePicker autoComplete='off' id='endDate' isClearable dateFormat="MM/dd/yyyy" placeholderText='End Date' className='form-control mr-1' selected={endDate} onChange={this.onEndChange} />
                  <Input autoComplete='off' placeholder="Search by name" value={byName} onChange={this.onSearchNameChange} />
               </InputGroup>
            </div>
            <div className='col-sm-2 pl-0'>
               <InputGroupAddon addonType="append">
                  <Button id='searchBtn' color="primary" size="md" onClick={this.searchStart} >
                     <FontAwesomeIcon icon={faSearch} />
                  </Button>
               </InputGroupAddon>
            </div>
            <div className='col-sm-4'></div>
         </div>
      );
   }
}

const mapStateToProps = (state) => {
   return {
      model: state.campaignModel
   }
}

export default connect(mapStateToProps)(FilterComponent);