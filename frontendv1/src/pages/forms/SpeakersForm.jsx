import React, { useState } from 'react'
import { addSpeaker } from '../api/organizer-api';

const SpeakersForm = () => {


    const defaultValue = {
        nameofspeaker:'',
        urlofspeaker:'',
        speakeremail:'',
        contactnumber:'',
        about:'',
        addressline1:' ',
        country:'',
        state:'',
        pincode:'',
        contactpersonname:'',
        contactpersondesignation:'',
        contactpersonemail:'',
        contactpersonphone:'',
        contactpersonimage:''
      }
      
      const [speaker,setSpeaker] =useState(defaultValue);
      
        const onValueChange=(e)=>{
          setSpeaker({...speaker,[e.target.name]:e.target.value});
        }
      
      
        const addSpeakerDetails = async() => {
          await addSpeaker(speaker);
      }
  return (
    <>
      <div className="container mt-2">

        <form className="row">
        <h3  className='text-center mt-5 mb-3'>Add Speakers</h3>

          <div className="col-md-6">
            <label htmlFor="validationDefault01" className="form-label">Name of Speaker</label>
            <input type="text" className="form-control" id="validationDefault01" defaultValue="Mark" required onChange={(e)=>onValueChange(e)} name='nameofspeaker'/>
          </div>
          <div className="col-md-6">
            <label htmlFor="validationDefault01" className="form-label">Url of Speaker</label>
            <input type="url" className="form-control" id="validationDefault01" defaultValue="WWW.xyz.com" required onChange={(e)=>onValueChange(e)} name='urlofspeaker'/>
          </div>
          <div className="col-md-6">
            <label htmlFor="validationDefaultUsername" className="form-label">Speaker Email</label>
            <div className="input-group">
              <span className="input-group-text" id="inputGroupPrepend2">📨</span>
              <input type="text" className="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required onChange={(e)=>onValueChange(e)} name='speakeremail'/>
            </div>
          </div>
          <div className="col-md-6">
            <label htmlFor="validationDefault03" className="form-label">Contact Number</label>
            <input type="text" className="form-control" data-mdb-input-mask={'+91-999-9999-999'} id="phone" required onChange={(e)=>onValueChange(e)} name='contactnumber'/>
          </div>
          <div classname="mb-3 p-">
            <label htmlFor="validationTextarea" className="form-label">About</label>
            <textarea className="form-control" id="validationTextarea" placeholder="Required example textarea" cols={'30'} rows={'6'} required  onChange={(e)=>onValueChange(e)} name='about'/>
            <div className="invalid-feedback">
              Please enter a message in the textarea.
            </div>
          </div>
          <div className="col-md-12">
            <label htmlFor="validationDefault03" className="form-label">Address line</label>
            <input type="paragraph" className="form-control" id="validationDefault03" required  onChange={(e)=>onValueChange(e)} name='addressline1'/>
          </div>
          <div className="col-md-4">
            <label htmlFor="validationDefault04" className="form-label">Country</label>
            <select className="form-select" id="validationDefault04" required onChange={(e)=>onValueChange(e)} name='country'>
              <option selected disabled value>Choose...</option>
              <option>India</option>
              <option>Russia</option>
              <option>New York</option>
              <option>China</option>
            </select>
          </div>
          <div className="col-md-4">
            <label htmlFor="validationDefault04" className="form-label">State</label>
            <select className="form-select" id="validationDefault04" required  onChange={(e)=>onValueChange(e)} name='state'>
              <option selected disabled value>Choose...</option>
              <option>UP</option>
              <option>Delhi</option>
              <option>MP</option>
              <option>Mumbai</option>
            </select>
          </div>
          <div className="col-md-4">
            <label htmlFor="validationDefault05" className="form-label">Pin Code</label>
            <input type="text" className="form-control" id="validationDefault05" required onChange={(e)=>onValueChange(e)} name='pincode'/>
          </div>
          <div className="col-md-6">
            <label htmlFor="validationDefault03" className="form-label">Contact Person Name</label>
            <input type="text" className="form-control" id="validationDefault03" required onChange={(e)=>onValueChange(e)} name='contactpersonname'/>
          </div>
          <div className="col-md-6">
            <label htmlFor="validationDefault03" className="form-label">Contact Person Designation</label>
            <input type="text" className="form-control" id="validationDefault03" required onChange={(e)=>onValueChange(e)} name='contactpersondesignation'/>
          </div>
          <div className="col-md-6">
            <label htmlFor="validationDefaultUsername" className="form-label">Contact Person Email</label>
            <div className="input-group">
              <span className="input-group-text" id="inputGroupPrepend2">📨</span>
              <input type="text" className="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required onChange={(e)=>onValueChange(e)} name='contactpersonemail'/>
            </div>
          </div>
          <div className="col-md-6">
            <label htmlFor="validationDefault03" className="form-label">Contact Person Phone</label>
            <input type="text" className="form-control" id="validationDefault03" required onChange={(e)=>onValueChange(e)} name='contactpersonphone'/>
          </div>
          <div className="col-md-12">
            <label htmlFor="validationDefault03" className="form-label">Contact Person Image</label>
            <input type="url" className="form-control" id="validationDefault03"   onChange={(e)=>onValueChange(e)} name='contactpersonimage'/>
          </div>

          <div className="col-12 m-5">
            <button className="btn btn-primary" type="submit" onClick={()=>addSpeakerDetails()}>Submit form</button>
          </div>
        </form>

      </div>
    
    
    
    </>
  )
}

export default SpeakersForm;