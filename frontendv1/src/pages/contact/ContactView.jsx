import React from 'react'
import {getContacts } from '../api/organizer-api';
import { useEffect,useState } from 'react';

const ContactView = () => {
  
  const [contacts, setContacts] = useState([]);

useEffect(()=>{
getAllContacts();
},[]);

const getAllContacts = async()=>{
 let response =  await getContacts();
 setContacts(response.data);
}


  return (
    <>
    
    
    <table className="table" >
  <thead>
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Full Name</th>
      <th scope="col">Email</th>
      <th scope="col">Subject</th>
      <th scope="col">Message</th>
    </tr>
  </thead>
  <tbody>
 {
  contacts.map(contact =>(
    <tr key={contact._id}>
      <td>{contact._id}</td>
      <td>{contact.fullname}</td>
      <td>{contact.email}</td>
      <td>{contact.subject}</td>
      <td>{contact.message}</td>
    </tr>
  ))
 }
  </tbody>
</table>


    </>
  )
}

export default ContactView