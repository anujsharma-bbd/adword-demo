import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addCampaigns } from "../../actions";
import { Input, InputGroupAddon, Button } from 'reactstrap';
import ReactDatePicker from 'react-datepicker';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave as btnIcon, faPlusCircle as plusicon } from '@fortawesome/free-solid-svg-icons';
import toastr from 'toastr';

const AddCampaignComponent = (props) => {
   const [state, setState] = useState({ name: '', id: '', userId: '', startDate: null, endDate: null, budget: '', isClosed: true });
   useEffect(() => {
      toastr.options = {
         positionClass: 'toast-top-full-width',
         hideDuration: 300,
         timeOut: 5000
      };
      toastr.clear();
   }, []);
   const onChange = (ev) => {
      let copyState = { ...state };
      let name = ev.target.name, value = ev.target.value;
      copyState[name] = value;
      setState(copyState);
   }
   const addCampaigns = () => {
      toastr.clear();
      const { name, id, userId, startDate, endDate, budget } = state;
      if (!name || !id || !userId || !startDate || !endDate || !budget) {
         toastr.error('Please fill all the fields.');
         return;
      }
      props.addCampaigns([{ name, id, userId, startDate, endDate, budget }]);
      setState({ name: '', id: '', userId: '', startDate: null, endDate: null, budget: '' });
   }
   const onClose = () => {
      toastr.clear();
      setState({ name: '', id: '', userId: '', startDate: null, endDate: null, budget: '', isClosed: true });
   }
   const onOpen = () => {
      setState({ isClosed: false });
   }
   const { name, id, userId, startDate, endDate, budget, isClosed } = state;
   return (
      <div className={'add-campaign container-fluid position-fixed ' + (isClosed ? ' closed ' : '')}>
         {!isClosed ?
            <>
               <span className='close-icon' onClick={onClose}>
                  <Button color="danger" size="sm" >
                     &times;
                     </Button>
               </span>
               <div className='row mt-4 mb-2'>
                  <div className='col-sm-3'>
                  </div>
                  <div className='col-sm-2'>
                     <Input  autoComplete='off' type='number' name='id' placeholder="Id" value={id} onChange={onChange} />
                  </div>
                  <div className='col-sm-2'>
                     <Input  autoComplete='off' name='name' placeholder="Name" value={name} onChange={onChange} />
                  </div>
                  <div className='col-sm-2'>
                     <ReactDatePicker autoComplete='off' isClearable name='startDate' dateFormat="MM/dd/yyyy" placeholderText='Start Date' className='form-control' selected={startDate} onChange={(val) => onChange({ target: { name: 'startDate', value: val } })} />
                  </div>
                  <div className='col-sm-3'>
                  </div>
               </div>
               <div className='row mb-2'>
                  <div className='col-sm-3'>
                  </div>
                  <div className='col-sm-2'>
                     <Input autoComplete='off' type='number' name='userId' placeholder="User ID" value={userId} onChange={onChange} />
                  </div>
                  <div className='col-sm-2'>
                     <Input autoComplete='off' type='number' name='budget' placeholder="Budget" value={budget} onChange={onChange} />
                  </div>
                  <div className='col-sm-2'>
                     <ReactDatePicker autoComplete='off' isClearable name='endDate' dateFormat="MM/dd/yyyy" placeholderText='End Date' className='form-control' selected={endDate} onChange={(val) => onChange({ target: { name: 'endDate', value: val } })} />
                  </div>
                  <div className='col-sm-3'>

                  </div>
               </div>
               <div className='row'>
                  <div className='col-sm-3'></div>
                  <div className='col-sm-6'>
                     <div className='pull-right'>
                        <InputGroupAddon addonType="append">
                           <Button color="primary" size="md" onClick={addCampaigns} >
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
                  <div className='col-sm-3 text-center cursor-pointer' onClick={onOpen}>
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
const mapDispatchToProps = (dispatch) => {
   return bindActionCreators({
      addCampaigns: addCampaigns
   }, dispatch);
}
export default connect(null, mapDispatchToProps)(AddCampaignComponent);