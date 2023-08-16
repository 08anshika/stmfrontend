import React, {useState} from 'react'
import { addEvent } from '../api/organizer-api';


const EventsFORM = () => {
  const defaultValue = {
    nameofspeaker:'',
    speakerimage:'',
    speakeremail:'',
    contactnumber:'',
    about:'',
    addressline:' ',
    eventdate:'',
    eventstarttime:'',
    eventendtime:''
    
  }
  
  const [event,setEvent] =useState(defaultValue);
  // const navigate = useNavigate();
  
    const onValueChange=(e)=>{
      setEvent({...event,[e.target.name]:e.target.value});
    }
  
  
    const addEventDetails = async() => {
      await addEvent(event);
      // navigate('/all-speaker');
  }
  return (
    <>
     <div className="container mt-2">

<form className="row">
<h3  className='text-center mt-5 mb-3'>Add Event</h3>

  <div className="col-md-6">
    <label htmlFor="validationDefault01" className="form-label">Name of Speaker</label>
    <input type="text" className="form-control" id="validationDefault01" defaultValue="Mark" required onChange={(e)=>onValueChange(e)} name='nameofspeaker'/>
  </div>
  <div className="col-md-6">
            <label htmlFor="validationDefault03" className="form-label">Speaker Image</label>
            <input type="url" className="form-control" id="validationDefault03"   onChange={(e)=>onValueChange(e)} name='speakerimage'/>
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
    <input type="paragraph" className="form-control" id="validationDefault03" required  onChange={(e)=>onValueChange(e)} name='addressline'/>
  </div>
  <div className="col-md-3">
    <label htmlFor="validationDefault03" className="form-label">Event Date</label>
    <input type="date" className="form-control" id="validationDefault03" required  onChange={(e)=>onValueChange(e)} name='eventdate'/>
  </div>
  <div className="col-md-3">
    <label htmlFor="validationDefault03" className="form-label">Event Starting Time</label>
    <input type="time" className="form-control" id="validationDefault03" required  onChange={(e)=>onValueChange(e)} name='eventstarttime'/>
  </div>
  <div className="col-md-3">
    <label htmlFor="validationDefault03" className="form-label">Event Ending Time</label>
    <input type="time" className="form-control" id="validationDefault03" required  onChange={(e)=>onValueChange(e)} name='eventendtime'/>
  </div>

  <div className="col-12 m-5">
    <button className="btn btn-primary" type="submit" onClick={()=>addEventDetails()}>Submit form</button>
  </div>
</form>

</div>
    
    
    
    </>
  )
}

export default EventsFORM