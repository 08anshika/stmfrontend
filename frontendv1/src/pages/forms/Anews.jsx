import React from 'react'
import {getNewss, deleteNews} from '../api/organizer-api';
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';

const Anews = () => {


  const [newss, setNews] = useState([]);

useEffect(()=>{
getAllNewss();
},[]);

const getAllNewss = async()=>{
 let response =  await getNewss();
 setNews(response.data);
}

const deleteNewsDetails=async(id)=>{
  await deleteNews(id);
  // getAllNewss();
}

  return (
    <>
    <table className="table" >
  <thead>
    <tr>
      <th scope="col">#News Id</th>
      <th scope="col">News Title</th>
      <th scope="col">News Picture</th>
      <th scope="col">About News</th>
      <th scope="col">News Date</th>
      <th scope="col">Update</th>
      <th scope="col">Remove</th>
    </tr>
  </thead>
  <tbody>
 {
  newss.map(news =>(
    <tr key={news._id}>
      <td>{news._id}</td>
      <td>{news.newstitle}</td>
      <td>{news.newspicture}</td>
      <td>{news.aboutnews}</td>
      <td>{news.newsdate}</td>
   
      <td>
<Link to={`/edit-news/${news._id}`}><button className='btn btn-primary' style={{marginRight:5}}>Edit</button></Link>
      </td>
      <td>
      <button className='btn btn-danger mx-2' style={{marginLeft:5}} onClick={()=>deleteNewsDetails(news._id)}>Delete</button>

      </td>

    </tr>
  ))
 }
  </tbody>
</table>
    
    
    </>
  )
}

export default Anews