import React from 'react'
import {getOrganizers, deleteOrganizer} from '../api/organizer-api';
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';

const EditOrganizer = () => {



  const [organizers, setOrganizers] = useState([]);

useEffect(()=>{
getAllOrganizers();
},[]);

const getAllOrganizers = async()=>{
 let response =  await getOrganizers();
 setOrganizers(response.data);
}

const deleteOrganizerDetails=async(id)=>{
  await deleteOrganizer(id);
  // getAllOrganizers();
}


  return (
    <>

{
  organizers.map(organizer=>(
    <div className="album py-5 bg-body-tertiary ">
  <div className="card  mx-auto" style={{maxWidth: 840}}>
    <div className="row">
      <div className="col-md-3">
         <img src={organizer.contactpersonimage}   className="img-fluid rounded-start" alt='' />
      </div>
      <div className="col-md-9">
        <div className="card-body">
          <h5 className="card-title">Organizer Id - {organizer._id}</h5>
          <h5 className='card-title'>Name of Organization - {organizer.nameoforganization}</h5>
          <p className='card-text '>Url of Organization - {organizer.urloforganization}</p>
          <p className='card-text '>Organization Email - {organizer.organizationemail}</p>
          <p className='card-text '>Contact Number - {organizer.contactnumber}</p>
          <p className='card-text '>About - {organizer.about}</p>
          <p className='card-text '>Address Line1 - {organizer.addressline1}</p>
          <p className='card-text '>Country - {organizer.country}</p>
          <p className='card-text '>State -{organizer.state}</p>
          <p className='card-text '>Pin code - {organizer.pincode}</p>
          <p className='card-text '>Contact Person -{organizer.contactpersonname}</p>
          <p className='card-text '>Contact Person Designation - {organizer.contactpersondesignation}</p>
          <p className='card-text '>Contact Person Email - {organizer.contactpersonemail}</p>
          <p className='card-text '>Contact Person Ph. Number - {organizer.contactpersonphone}</p>
          <p className="card-text "><small className="text-body-secondary">{'Thanks'}</small></p>
<Link to={`/edit-organizer/${organizer._id}`}><button className='btn btn-primary' style={{marginRight:5}}>Edit</button></Link>
<button className='btn btn-danger mx-2' style={{marginLeft:5}} onClick={()=>deleteOrganizerDetails(organizer._id)}>Delete</button>


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

export default EditOrganizer