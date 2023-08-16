import React from 'react'
import { useState } from 'react'
import { addContact} from '../api/organizer-api'

const Contact = () => {
  const defaultValue = {
		fullname:'',
		email:'',
		subject:'',
		message:''
	  }

	const [contact , setContact] = useState({defaultValue});


	const onValueChange = (e) => {
		setContact({...contact,[e.target.name]:e.target.value})
		console.log(contact);  
	  }
	  const   addContactDetails =async() => {
		await addContact(contact);  
	 
	   }
  return (
    <>

<div className="container">
  <div className="row g-3 m-auto">
      <h1 className='text-center '>Contact Us</h1>

      <hr/>
    
  <div className="row g-3 abc123">
  <div className="col-6 mt-4">
  <lottie-player src="https://assets3.lottiefiles.com/packages/lf20_ejjweisq.json" background="transparent"  speed="1"   autoplay></lottie-player>
    </div>
    <div className="col-6">

    <form className="row g-3 mt-0">
  <div className="col-md-10">
    <label htmlFor="validationDefault01" className="form-label">Full Name</label>
  
    <input type="text" className="form-control" id="validationDefault01"   required onChange={(e)=>onValueChange(e)} name='fullname'  />
  </div>
  <div className="col-md-10">
    <label htmlFor="validationDefault02" className="form-label">Email</label>
    <input type="email" className="form-control" id="validationDefault02" required onChange={(e)=>onValueChange(e)} name='email'/>
  </div>
  <div className="col-md-10">
    <label htmlFor="validationDefault02" className="form-label">Subject</label>
    <input type="text" className="form-control" id="validationDefault02"  required onChange={(e)=>onValueChange(e)} name='subject'/>
  </div>
  <div className="col-md-10">
    <label htmlFor="validationDefault02" className="form-label">Message</label>
    <textarea class="form-control form-control-sm mb-3" rows="6" placeholder="Large textarea " onChange={(e)=>onValueChange(e)} name='message'></textarea>
  </div>
  <div className="col-12">
    <button className="btn btn-primary sbn123" type="submit"  onClick={()=>addContactDetails()}>Submit form</button>
  </div>
</form>
    </div>
  </div>
  </div>
</div>
    
    
    
    </>
  )
}

export default Contact