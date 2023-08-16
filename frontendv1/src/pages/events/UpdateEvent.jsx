import React from 'react'
import {getEvents, deleteEvent} from '../api/organizer-api';
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';

const UpdateEvent = () => {

    const [events, setEvents] = useState([]);

    useEffect(()=>{
    getAllEvents();
    },[]);
    
    const getAllEvents = async()=>{
     let response =  await getEvents();
     setEvents(response.data);
    }
    
    const deleteEventsDetails=async(id)=>{
      await deleteEvent(id);
      getAllEvents();
    }
  return (
    <>
      <table className="table" >
  <thead>
    <tr>
      <th scope="col">#Event Id</th>
      <th scope="col">Event Name</th>
      <th scope="col">Event contact Number</th>
      <th scope="col">Speaker Email</th>
      <th scope="col">Event About</th>
      <th scope="col">Speaker image</th>
      <th scope="col">Event Address</th>
      <th scope="col">Event Date</th>
      <th scope="col">Event Start Time</th>
      <th scope="col">Event End Time</th>
      <th scope="col">Update</th>
      <th scope="col">Remove</th>

    </tr>
  </thead>
  <tbody>
 {
  events.map(event =>(
    <tr key={event._id}>
      <td>{event._id}</td>
      <td>{event.nameofspeaker}</td>
      <td>{event.contactnumber}</td>
      <td>{event.speakeremail}</td>
      <td>{event.about}</td>
      <td><img src={event.speakerimage}/></td>
      <td>{event.addressline}</td>
      <td>{event.eventdate}</td>
      <td>{event.eventstarttime}</td>
      <td>{event.eventendtime}</td>
      <td>
<Link to={`/edit-event/${event._id}`}><button className='btn btn-primary' style={{marginRight:5}}>Edit</button></Link>
      </td>
      <td>
      <button className='btn btn-danger mx-2' style={{marginLeft:5}} onClick={()=>deleteEventsDetails(event._id)}>Delete</button>

      </td>

    </tr>
  ))
 }
  </tbody>
</table>

    </>
  )
}

export default UpdateEvent
