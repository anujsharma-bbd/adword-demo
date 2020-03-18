import React from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addCampaigns } from "../../actions";
import { Input, InputGroupAddon, Button } from 'reactstrap';
import ReactDatePicker from 'react-datepicker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave as btnIcon, faPlusCircle as plusicon } from '@fortawesome/free-solid-svg-icons';
import toastr from 'toastr';

class AddCampaignComponent extends React.Component {
   constructor(props) {
      super(props);
      this.state = { name: '', id: '', userId: '', startDate: null, endDate: null, budget: '', isClosed: true };
      this.onChange = this.onChange.bind(this);
      this.addCampaigns = this.addCampaigns.bind(this);
      this.onClose = this.onClose.bind(this);
      this.onOpen = this.onOpen.bind(this);
      toastr.options = {
         positionClass: 'toast-top-full-width',
         hideDuration: 300,
         timeOut: 5000
      };
      toastr.clear();
   }
   onChange(ev) {
      let copyState = { ...this.state };
      let name = ev.target.name, value = ev.target.value;
      copyState[name] = value;
      this.setState(copyState);
   }
   addCampaigns() {
      toastr.clear();
      const { name, id, userId, startDate, endDate, budget } = this.state;
      if (!name || !id || !userId || !startDate || !endDate || !budget) {
         toastr.error('Please fill all the fields.');
         return;
      }
      this.props.addCampaigns([{ name, id, userId, startDate, endDate, budget }]);
      this.setState({ name: '', id: '', userId: '', startDate: null, endDate: null, budget: '' });
   }
   onClose() {
      toastr.clear();
      this.setState({ name: '', id: '', userId: '', startDate: null, endDate: null, budget: '', isClosed: true });
   }
   onOpen() {
      this.setState({ isClosed: false });
   }
   render() {
      const { name, id, userId, startDate, endDate, budget, isClosed } = this.state;
      return (
         <div className={'add-campaign container-fluid position-fixed ' + (isClosed ? ' closed ' : '')}>
            {!isClosed ?
               <>
                  <span className='close-icon' onClick={this.onClose}>
                     <Button color="danger" size="sm" >
                        &times;
                     </Button>
                  </span>
                  <div className='row mt-4 mb-2'>
                     <div className='col-sm-3'>
                     </div>
                     <div className='col-sm-2'>
                        <Input type='number' name='id' placeholder="Id" value={id} onChange={this.onChange} />
                     </div>
                     <div className='col-sm-2'>
                        <Input name='name' placeholder="Name" value={name} onChange={this.onChange} />
                     </div>
                     <div className='col-sm-2'>
                        <ReactDatePicker isClearable name='startDate' dateFormat="MM/dd/yyyy" placeholderText='Start Date' className='form-control' selected={startDate} onChange={(val) => this.onChange({ target: { name: 'startDate', value: val } })} />
                     </div>
                     <div className='col-sm-3'>
                     </div>
                  </div>
                  <div className='row mb-2'>
                     <div className='col-sm-3'>
                     </div>
                     <div className='col-sm-2'>
                        <Input type='number' name='userId' placeholder="User ID" value={userId} onChange={this.onChange} />
                     </div>
                     <div className='col-sm-2'>
                        <Input type='number' name='budget' placeholder="Budget" value={budget} onChange={this.onChange} />
                     </div>
                     <div className='col-sm-2'>
                        <ReactDatePicker isClearable name='endDate' dateFormat="MM/dd/yyyy" placeholderText='End Date' className='form-control' selected={endDate} onChange={(val) => this.onChange({ target: { name: 'endDate', value: val } })} />
                     </div>
                     <div className='col-sm-3'>

                     </div>
                  </div>
                  <div className='row'>
                     <div className='col-sm-3'></div>
                     <div className='col-sm-6'>
                        <div className='pull-right'>
                           <InputGroupAddon addonType="append">
                              <Button color="primary" size="md" onClick={this.addCampaigns} >
                                 <FontAwesomeIcon icon={btnIcon} />
                           &nbsp;Save
                     </Button>
                           </InputGroupAddon>
                        </div>
                     </div>
                  </div>
               </>
               : <>
                  <div className='row mt-2 cursor-pointer'>
                     <div className='col-sm-5'></div>
                     <div className='col-sm-3 text-center cursor-pointer' onClick={this.onOpen}>
                        <InputGroupAddon addonType="append">
                           <Button color="primary" size="md" >
                              <FontAwesomeIcon icon={plusicon} />
                           </Button>
                           <span className='ml-2 mt-1' >Add Campaign here...</span>
                        </InputGroupAddon>
                     </div>
                     <div className='col-sm-3'></div>
                  </div>
               </>
            }
         </div>
      )
   }
}
const mapDispatchToProps = (dispatch) => {
   return bindActionCreators({
      addCampaigns: addCampaigns
   }, dispatch);
}
export default connect(null, mapDispatchToProps)(AddCampaignComponent);