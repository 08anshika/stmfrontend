import { getEvents } from '../api/organizer-api'
import { useEffect, useState } from 'react';
import './Event.css';
const Events = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    getAllEvents();
  }, []);

  const getAllEvents = async () => {
    let response = await getEvents();
    setEvents(response.data);
  }

  return (
    <>
      <div className="event-schedule-area-two bg-color pad100">
        <div className="m-5">
          <div className="row">
            <div className="col-lg-12">
              <div className="section-title text-center">
                <div className="title-text">
                  <h2>Event Schedule</h2>
                </div>
                <p>
                  In ludus latine mea, eos paulo quaestio an. Meis possit ea sit. Vidisse molestie<br />
                  cum te, sea lorem instructior at.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <ul className="nav custom-tab" id="myTab" role="tablist">
                <li className="nav-item">
                  <a className="nav-link active show" id="home-taThursday" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Day 1</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Day 2</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">Day 3</a>
                </li>
                <li className="nav-item d-none d-lg-block">
                  <a className="nav-link" id="sunday-tab" data-toggle="tab" href="#sunday" role="tab" aria-controls="sunday" aria-selected="false">Day 4</a>
                </li>
                <li className="nav-item mr-0 d-none d-lg-block">
                  <a className="nav-link" id="monday-tab" data-toggle="tab" href="#monday" role="tab" aria-controls="monday" aria-selected="false">Day 5</a>
                </li>
              </ul>
            
                  <div className="tab-content" id="myTabContent">
                <div className="tab-pane fade active show" id="home" role="tabpanel">
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th className="text-center" scope="col">Date</th>
                          <th scope="col">Speakers</th>
                          <th scope="col" className='text-center'>Session</th>
                          <th scope="col">Venue</th>
                          <th className="text-center" scope="col">Venue</th>
                        </tr>
                      </thead>
                      {
                events.map(event=>(
                      <tbody>
                        <tr className="inner-box">
                          <th scope="row">
                            <div className="event-date ">
                              <span className='fs-6'>{event.eventdate}</span>
                              {/* <p>Novembar</p> */}
                            </div>
                          </th>
                          <td>
                            <div className="event-img">
                              <img src={event.speakerimage} alt />
                            </div>
                          </td>
                          <td>
                            <div className="event-wrap">
                              <h3><a href="#">{event.nameofspeaker}</a></h3>
                              <span>{event.speakeremail}</span>
                              <div className="meta">
                                <div className="organizers w-90">
                              
                                  <p>{event.about}</p>
                                </div>
                               
                                <div className="time">Time
                                  <span> starting {event.eventstarttime} -Ending {event.eventendtime}</span>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="r-no">
                              <span>{event.addressline}</span>
                            </div>
                          </td>
                          <td>
                            <div className="primary-btn">
                              <a className="btn btn-primary" href="#">Read More</a>
                            </div>
                          </td>
                        </tr>


                      </tbody>
                      ))
              }
                    </table>
                  </div>
                </div>
                <div className="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                  <div className="table-responsive">
                    <table className="table">
                      <thead>
                        <tr>
                          <th scope="col">Date</th>
                          <th scope="col">Speakers</th>
                          <th scope="col">Session</th>
                          <th scope="col">Venue</th>
                          <th scope="col">Venue</th>
                        </tr>
                      </thead>

                    </table>
                  </div>
                </div>

              </div>
           
             
              <div className="primary-btn text-center">
                <a href="#" className="btn btn-primary">Download Schedule</a>
              </div>
            </div>
          </div>
        </div>
      </div>





    </>
  )
}

export default Events