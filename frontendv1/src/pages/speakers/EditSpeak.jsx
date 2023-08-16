import React from 'react'
import {getSpeakers, deleteSpeaker} from '../api/organizer-api';
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';

const EditSpeak = () => {



  const [speakers, setSpeakers] = useState([]);

useEffect(()=>{
getAllSpeakers();
},[]);

const getAllSpeakers = async()=>{
 let response =  await getSpeakers();
 setSpeakers(response.data);
}

const deleteSpeakerDetails=async(id)=>{
  await deleteSpeaker(id);
  // getAllOrganizers();
}


  return (
    <>

{
  speakers.map(speaker=>(
    <div className="album py-5 bg-body-tertiary ">
  <div className="card  mx-auto" style={{maxWidth: 840}}>
    <div className="row">
      <div className="col-md-3">
         <img src={speaker.contactpersonimage}   className="img-fluid rounded-start" alt='' />
      </div>
      <div className="col-md-9">
        <div className="card-body">
          <h5 className="card-title">Organizer Id - {speaker._id}</h5>
          <h5 className='card-title'>Name of Organization - {speaker.nameofspeaker}</h5>
          <p className='card-text '>Url of Organization - {speaker.urlofspeaker}</p>
          <p className='card-text '>Organization Email - {speaker.speakeremail}</p>
          <p className='card-text '>Contact Number - {speaker.contactnumber}</p>
          <p className='card-text '>About - {speaker.about}</p>
          <p className='card-text '>Address Line1 - {speaker.addressline1}</p>
          <p className='card-text '>Country - {speaker.country}</p>
          <p className='card-text '>State -{speaker.state}</p>
          <p className='card-text '>Pin code - {speaker.pincode}</p>
          <p className='card-text '>Contact Person -{speaker.contactpersonname}</p>
          <p className='card-text '>Contact Person Designation - {speaker.contactpersondesignation}</p>
          <p className='card-text '>Contact Person Email - {speaker.contactpersonemail}</p>
          <p className='card-text '>Contact Person Ph. Number - {speaker.contactpersonphone}</p>
          <p className="card-text "><small className="text-body-secondary">{'Thanks'}</small></p>
<Link to={`/edit-speaker/${speaker._id}`}><button className='btn btn-primary' style={{marginRight:5}}>Edit</button></Link>
<button className='btn btn-danger mx-2' style={{marginLeft:5}} onClick={()=>deleteSpeakerDetails(speaker._id)}>Delete</button>


        </div>
      </div>
    </div>
  </div>
</div>


   ))
  }
   

    
    </>
  )
}

export default EditSpeak