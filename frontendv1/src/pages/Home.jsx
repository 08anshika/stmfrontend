import React from 'react'
import About from './About/About'
import Slider from '../components/slider/Slider'
import Faq from '../pages/faq/Faq'
import Contact from './contact/Contact'
import Services from './services/Services'
import About2 from './About/About2'
const Home = () => {
  return (
    <>
      <div className="row g-3">
        <Slider />
        <div className="col-md-9 div123 m-1">
          <About />
        <Services/>
        <Faq />
         <Contact/>
        

        </div>
        <div className="col-md-4">
          <div className="position-sticky" style={{ top: '2rem' }}>
            <div className="p-3 mb-3 bg-body-tertiary rounded ">
              <h4 className="fst-italic">About</h4>
              <p className="mb-0">Customize this section to tell your visitors a little bit about your publication, writers, content, or something else entirely. Totally up to you.</p>
            </div>
            <div>
              <h4 className="fst-italic">Recent posts</h4>
              <ul className="list-unstyled">
                <li>
                  <a className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="#">
                    <svg className="bd-placeholder-img" width="100%" height={96} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777" /></svg>
                    <div className="col-lg-8">
                      <h6 className="mb-0">Example blog post title</h6>
                      <small className="text-body-secondary">January 15, 2023</small>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="#">
                    <svg className="bd-placeholder-img" width="100%" height={96} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777" /></svg>
                    <div className="col-lg-8">
                      <h6 className="mb-0">This is another blog post title</h6>
                      <small className="text-body-secondary">January 14, 2023</small>
                    </div>
                  </a>
                </li>
                <li>
                  <a className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-lg-center py-3 link-body-emphasis text-decoration-none border-top" href="#">
                    <svg className="bd-placeholder-img" width="100%" height={96} xmlns="http://www.w3.org/2000/svg" aria-hidden="true" preserveAspectRatio="xMidYMid slice" focusable="false"><rect width="100%" height="100%" fill="#777" /></svg>
                    <div className="col-lg-8">
                      <h6 className="mb-0">Longer blog post title: This one has multiple lines!</h6>
                      <small className="text-body-secondary">January 13, 2023</small>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            <div className="p-4">
              <h4 className="fst-italic">Elsewhere</h4>
              <ol className="list-unstyled">
                <li><a href="#">GitHub</a></li>
                <li><a href="#">Twitter</a></li>
                <li><a href="#">Facebook</a></li>
              </ol>
            </div>
          </div>
        </div>

      </div>




    </>
  )
}

export default Home