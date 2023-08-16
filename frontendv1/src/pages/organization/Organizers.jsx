import React from 'react'
import {getOrganizers, deleteOrganizer} from '../api/organizer-api';
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';

const Organization = () => {



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

<h5 className='h1 text-center text-dark' id="pageHeaderTitle">Organizers </h5>
{
  organizers.map(organizer=>(
<section className="light">
  <div className="container py-2">
    <article className="postcard light blue">
      <a className="postcard__img_link" href="#">
      <img className="postcard__img"  src={organizer.contactpersonimage} alt="Image Title" />
      </a>
      <div className="postcard__text t-dark">
        <h1 className="postcard__title blue"><a href="#">{organizer.nameoforganization}</a></h1>
        <div className="postcard__subtitle small">
          <time dateTime="2020-05-25 12:00:00">
            <i className=" h3" />{organizer.organizationemail}
          </time>
        </div>
        <div className="postcard__bar" />
        <div className="postcard__preview-txt">{organizer.about}</div>
        <ul className="postcard__tagbox">
          <li className="tag__item"><i className="fas fa-tag mr-2" /> <Link to={organizer.urloforganization}> Podcast</Link></li>
          <li className="tag__item"><i className="fas fa-clock mr-2" />55 mins.</li>
          <li className="tag__item play blue">
            <a href="#"><i className="fas fa-play mr-2" />Play Episode</a>
          </li>
        </ul>
      </div>
    </article>
  
  </div>
</section>

  



   ))
  }
   

    
    </>
  )
}

export default Organization