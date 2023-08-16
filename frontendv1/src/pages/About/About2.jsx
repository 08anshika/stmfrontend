import React from "react";
import './About2.css'

const About2 = () => {
  return (
    <>
      <div className="container">
        <h1 className="text-center mt-2 mb-2">
          <strong>About Us</strong>
        </h1>
        <p className="about2p">STM Journals is an imprint of Consortium e-Learning Network Pvt. Ltd., a leading provider of academic and professional publishing services. For over 20 years of excellence and experience in the industry, we are dedicated to supporting researchers, scholars, and professionals by providing them with high-quality content, tools, and services regarding Journals that enable them to achieve their goals.

At STM, Journals we are committed to promoting open access publishing as well as transformative models for the dissemination of research. We believe that knowledge should be open and accessible to all, and we work closely with ourauthors, editors and society partners in the academic community to ensure that our publications and resources are relevant, reliable, and accessible.

With a focus on innovation and excellence, STM Journals is proud to be a trusted partner for researchers and institutions around the world. We are dedicated to driving forward the frontiers of research and knowledge, and we look forward to continuing to serve the academic and professional communities for many years to come.</p>
       
       
        <div class="card-group">
          <div class="card m-4 a1 ">

            <div class="card-body text-center">
            <img src="/Our Mission.png"  height='240px;' className="card-img-top" alt="..." />

              <button
                type="button"
                class="btn btn-dark"
                data-bs-toggle="modal"
                data-bs-target="#exampleModalone"
              >
                Read More
              </button>

              <div
                class="modal fade"
                id="exampleModalone"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">
                        OUR MISSION
                      </h1>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      At STM Conference, our mission is to facilitate the
                      advancement of knowledge and foster collaboration among
                      professionals in various fields through high-quality
                      conferences and events worldwide. We aim to provide a
                      platform for individuals to share their research, ideas,
                      and experiences, promoting learning, discussion, and
                      innovation.
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card m-4 a1 ">

            <div class="card-body text-center">
            <img src="/Our Vision.png" height='240px;' classname="card-img-top" alt="..." />

              <button
                type="button"
                class="btn btn-dark"
                data-bs-toggle="modal"
                data-bs-target="#exampleModaltwo"
              >
                Read More
              </button>

              <div
                class="modal fade"
                id="exampleModaltwo"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">
                        OUR VISION
                      </h1>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      Our vision is to become a global leader in organizing
                      conferences and events that bring together professionals
                      from diverse backgrounds and cultures, promoting the
                      exchange of knowledge and ideas. We strive to create a
                      welcoming and inclusive environment that encourages
                      collaboration, creativity, and professional growth.
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card m-4 a1 ">

            <div class="card-body text-center">
            <img src="/Our Values.png"  height='240px;' className="card-img-top" alt="..." />

              <button
                type="button"
                class="btn btn-dark"
                data-bs-toggle="modal"
                data-bs-target="#exampleModalthree"
              >
                Read More
              </button>

              <div
                class="modal fade"
                id="exampleModalthree"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div class="modal-dialog modal-dialog-centered">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h1 class="modal-title fs-5" id="exampleModalLabel">
                        OUR VALUES
                      </h1>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      Our core values guide everything we do, including our
                      commitment to professionalism, quality, and inclusivity.
                      We strive to provide the highest level of service,
                      ensuring that every aspect of the event is well-planned
                      and executed to perfection. We are committed to creating a
                      welcoming and inclusive environment where all participants
                      feel comfortable and valued. We believe that by providing
                      exceptional conferences and events, we can make a positive
                      impact on the world by facilitating the exchange of
                      knowledge and ideas among professionals in various fields.
                    </div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About2;
