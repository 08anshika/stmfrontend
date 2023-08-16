import React from 'react'
import {getNewss} from '../api/organizer-api';
import { useEffect,useState } from 'react';
import './News.css';

const News = () => {
  const [newss, setNewss] = useState([]);

  useEffect(()=>{
  getAllNewss();
  },[]);
  
  const getAllNewss = async()=>{
   let response =  await getNewss();
   setNewss(response.data);
  }
  

  
  return (
    <>
      <section className="light m-3">
  <div className="py-4">
    <h1 className="h1 text-center" id="pageHeaderTitle">News</h1>
    {
  newss.map(news=>(
    <article className="postcard dark blue">
      <a className="postcard__img_link" href="#">
        <img className="postcard__img" src={news.newspicture} alt="Image Title" />
      </a>
      <div className="postcard__text">
        <h1 className="postcard__title blue"><a href="#">{news.newstitle}</a></h1>
        <div className="postcard__subtitle small">
          <time dateTime="2020-05-25 12:00:00">
            <i className="fas fa-calendar-alt mr-2" />{news.newsdate}
          </time>
        </div>
        <div className="postcard__bar" />
        <div className="postcard__preview-txt">{news.aboutnews}</div>
        <ul className="postcard__tagbox">
          <li className="tag__item"><i className="fas fa-tag mr-2" />Podcast</li>
          <li className="tag__item"><i className="fas fa-clock mr-2" />55 mins.</li>
          <li className="tag__item play blue">
            <a href="#"><i className="fas fa-play mr-2" />Play Episode</a>
          </li>
        </ul>
      </div>
    </article>
    ))
  }
  </div>
</section>





    </>
  )
}

export default News