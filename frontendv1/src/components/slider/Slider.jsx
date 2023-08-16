import React from 'react'
import './Slider.css';
import { Link } from 'react-router-dom';

const Slider = () => {
  return (
    <>

      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="https://st.depositphotos.com/1010710/3382/i/450/depositphotos_33823065-stock-photo-empty-conference-room.jpg" className="d-block w-100" alt="banner" />
            <div class="carousel-caption d-none d-md-block">
              <h1 className='sf'>Conference</h1>
              <div><p>Welcome to STM Conference, a leading organization dedicated to organizing and facilitating high-quality conferences and events all over the world. With a team of experienced professionals and a commitment to excellence, we are proud to be a trusted partner for researchers, scholars, academics, and professionals in various fields.</p></div>
              


              <div class="card-body text-center">
              <button
                type="button"
                class="btn btn-dark"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
              >
                Call for paper
              </button>
              <div
                class="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel" style={{color:'black'}}>
                        Publish your Research Online
                      </h1>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body" style={{color:'black'}}>
                     <h1>Call For Papers - July 2023</h1>
                     
                    </div>
                    <div class="modal-footer">
                    <Link to="https://manuscript-engine.journalslibrary.com/m-sub/" target="_blank"><button className='btn btn-dark'>Submit Manuscript</button></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
              



            </div>
          </div>
          <div className="carousel-item">
            <img src="https://media.istockphoto.com/id/1291614652/photo/close-up-modern-design-chair-in-conference-room-with-window-curtain-background-free-copy.jpg?s=612x612&w=0&k=20&c=svF2nYhPxJ1rnUL3qHKRJos-4oSmjScVqTi76XZrJrM=" className="d-block w-100" alt="Banner" />
            <div class="carousel-caption d-none d-md-block">
              <h1 className='sf'>Conference</h1>
              <div><p>Welcome to STM Conference, a leading organization dedicated to organizing and facilitating high-quality conferences and events all over the world. With a team of experienced professionals and a commitment to excellence, we are proud to be a trusted partner for researchers, scholars, academics, and professionals in various fields.</p></div>
              
              
              <div class="card-body text-center">
              <button
                type="button"
                class="btn btn-dark"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal1"
              >
                Call for paper
              </button>

              <div
                class="modal fade"
                id="exampleModal1"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel" style={{color:'black'}}>
                        Publish your Research Online
                      </h1>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body" style={{color:'black'}}>
                     <h1>Call For Papers - July 2023</h1>
                    </div>
                    <div class="modal-footer">
                    <Link to="https://manuscript-engine.journalslibrary.com/m-sub/" target="_blank"><button className='btn btn-dark'>Submit Manuscript</button></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
             


              </div>
          </div>
          <div className="carousel-item">
            <img src="https://media.istockphoto.com/id/484396028/photo/closeup-of-an-empty-conference-room-before-meeting.jpg?s=170667a&w=0&k=20&c=pw0qZwkozZWZoHHBVJxTCrnRNUsfoIjVIZG-hHeDrhQ=" className="d-block w-100" alt="Banner" />
            <div class="carousel-caption d-none d-md-block">
              <h1 className='sf'>Conference</h1>
              <div><p>Welcome to STM Conference, a leading organization dedicated to organizing
                 and facilitating high-quality conferences and events all over the world. With a team of 
                 experienced professionals and a commitment to excellence, we are proud to be a trusted partner 
                 for researchers, scholars, academics, and professionals in various fields.</p></div>
              
                 <div class="card-body text-center">
              <button
                type="button"
                class="btn btn-dark"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal2"
              >
                Call for paper
              </button>

              
              <div
                class="modal fade"
                id="exampleModal2"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel" style={{color:'black'}}>
                        Publish your Research Online
                      </h1>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body" style={{color:'black'}}>
                     <h1>Call For Papers - July 2023</h1>
                    </div>
                    <div class="modal-footer">
                    <Link to="https://manuscript-engine.journalslibrary.com/m-sub/" target="_blank"><button className='btn btn-dark'>Submit Manuscript</button></Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>


            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

    </>
  )
}

export default Slider