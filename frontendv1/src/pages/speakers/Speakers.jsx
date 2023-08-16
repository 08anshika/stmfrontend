import React from 'react'
import {getSpeakers} from '../api/organizer-api'
import { useEffect, useState } from 'react';
import './Speakers.css'
import { Link } from 'react-router-dom';


const Speakers = () => {

const [speakers, setSpeakers] = useState([]);

useEffect(()=>{
  getAllSpeakers(); 
},[]);

const getAllSpeakers= async()=>{
  let response = await getSpeakers();
  setSpeakers(response.data);
}

  return (
    <>
    
    
   
          <div className="event">
  <div className="container">
    <div className="row">
      <div className="col-lg-12 ">
     
      {
        speakers.map(speaker=>(
        <div className="tab-content py-3 px-3 px-sm-0 wow fadeInDown  animated" data-animation="fadeInDown animated" data-delay=".2s" id="nav-tabContent" style={{visibility: 'visible', animationName: 'fadeInDown'}}>
          <div className="tab-pane fade active show" id="one" role="tabpanel" aria-labelledby="nav-home-tab">
            <div className="row mb-30">
              <div className="col-lg-2">
                <div className="user">
                  <div className="title">
                  <Link to={speaker.urlofspeaker}  ><img src={speaker.contactpersonimage} alt="img" /></Link>
                    <h5>{speaker.nameofspeaker}</h5>
                    <p>{speaker.speakeremail}</p>
                  </div>
                  <ul>
                    <li>{speaker.contactpersondesignation}</li>
                    <li>{speaker.contactpersonphone}</li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-10">
                <div className="event-list-content fix">
                  <ul data-animation="fadeInUp animated" data-delay=".2s" style={{animationDelay: '0.2s'}} className>
                  </ul>
                  <h2>{speaker.nameofspeaker}</h2>
                  <p>{speaker.about}</p>
                  {/* <Link to="#" className="btn mt-20 mr-10"><i className="far fa-ticket-alt" /> Buy Ticket</Link> */}
                  <Link to="#" className="btn mt-20">Read More</Link>
                  <div className="crical"><i className="fal fa-video" /> </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        )
                           
                           )
      }

      </div>
      <div className="col-lg-12 justify-content-center text-center">
        <Link to="#" className="btn mt-20 mr-10 m-5">More Program  +</Link>
      </div>
    </div>
  </div>
</div>

        
     
    </>
  )
}

export default Speakers

