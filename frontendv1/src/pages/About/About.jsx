import React from 'react'
import './About.css';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>


      <div className="row d-flex m-4">
        <h2 className='text-center about'><strong>Know More..</strong></h2>
        <hr />

        <div className="col-md-4">

          <h4 className="text-center"><strong>Conferences</strong></h4>

          <hr />
          <div className="news-card-4 text-center"><img src="https://mobirise.com/extensions/coworkingamp/conference_room/assets/images/10-1.jpg" className="img img-responsive" alt='News' />
            <div className="profile-content">
              <div className="profile-description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</div>
              <div className="row">
                <div className="col-xs-4">
                  <div className="profile-overview">
                  <Link to='/conference'><button type="button" class="btn btn-dark">More</button></Link>
                  </div>
                </div>
                </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <h4 className="text-center"><strong>Organizers</strong></h4>
          <hr/>
          <div className="news-card-4 text-center">
            <img src="https://mobirise.com/extensions/coworkingamp/conference_room/assets/images/3.jpg" className="img img-responsive" alt='News' />
            <div className="profile-content">
              <div className="profile-description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</div>
              <div className="row">
                <div className="col-xs-4">
                  <div className="profile-overview">
                  <Link to='/all-organizers'><button type="button" class="btn btn-dark">More</button></Link>
                </div>
              </div>
            </div></div>
        </div>
        </div>
        <div className="col-md-4">
          <h4 className="text-center"><strong>Speakers</strong></h4>

          <hr />
          <div className="news-card-4 text-center"><img src="https://mobirise.com/extensions/coworkingamp/conference_room/assets/images/coworking8.jpg" className="img img-responsive" alt='News' />
            <div className="profile-content">
              <div className="profile-description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</div>
              <div className="row">
                <div className="col-xs-4">
                  <div className="profile-overview">
                  <Link to='/all-speakers'><button type="button" class="btn btn-dark">More</button></Link>
                </div>
                </div>
            </div>
          </div>
        </div>
        </div>
        <div className="col-md-4">
          <h4 className="text-center"><strong>Events</strong></h4>

          <hr />
          <div className="news-card-4 text-center"><img src="https://mobirise.com/extensions/coworkingamp/conference_room/assets/images/1.jpg" className="img img-responsive" alt='News' />
            <div className="profile-content">
              <div className="profile-description">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.</div>
              <div className="row">
                <div className="col-xs-4">
                  <div className="profile-overview">
                  <Link to='/events'><button type="button" class="btn btn-dark">More</button></Link>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>
      </div>




    </>
  )
}

export default About