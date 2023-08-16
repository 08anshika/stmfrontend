import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <>
  <footer className="py-5 f123 bg-light shadow-sm">
    <div className="row">
      <div className="col-6 col-md-2 mb-3 mx-5 ">
        <h5>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><Link to="/home" className="nav-link p-0 text-body-secondary">Home</Link></li>
          <li className="nav-item mb-2"><Link to="/conference" className="nav-link p-0 text-body-secondary">Conference Guidelines</Link></li>
        <li className="nav-item mb-2"><Link to="/all-organizers" className="nav-link p-0 text-body-secondary">Organizers</Link></li>
          <li className="nav-item mb-2"><Link to="/all-Speakers" className="nav-link p-0 text-body-secondary">Speakers</Link></li>
          
        </ul>
      </div>
      <div className="col-6 col-md-2 mb-3">
        <h5>Section</h5>
        <ul className="nav flex-column">
          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-body-secondary">Lead generation form</Link></li>
          <li className="nav-item mb-2"><Link to="/news" className="nav-link p-0 text-body-secondary">News</Link></li>
         
          <li className="nav-item mb-2"><Link to="/about" className="nav-link p-0 text-body-secondary">About</Link></li>
        </ul>
      </div>
      <div className="col-6 col-md-2 mb-3 ">
        <h5>Section</h5>
        <ul className="nav flex-column">
        <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-body-secondary">Sponsers</Link></li>
          <li className="nav-item mb-2"><Link to="#" className="nav-link p-0 text-body-secondary">Privacy policy</Link></li>
          <li className="nav-item mb-2"><Link to="/faq" className="nav-link p-0 text-body-secondary">FAQs</Link></li>
        </ul>
      </div>
      <div className="col-md-3 offset-md-1 mb-2">
        <form>
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of what's new and exciting from us.</p>
          <div className="d-flex flex-column flex-sm-row w-100 gap-3 mt-2">
            <label htmlFor="newsletter1" className="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" className="form-control" placeholder="Email address" fdprocessedid="uu5sx"/>
            <button className="btn btn-primary" type="button" fdprocessedid="04wz5a" >Subscribe</button>
          </div>
        </form>
        <ul className="list-unstyled d-flex mx-5 mt-3">
        <li className="ms-4"><Link className="link-body-emphasis" to="#"><img src="https://s.yimg.com/fz/api/res/1.2/7wmcqjtgVFiMeMxLOlW3sw--~C/YXBwaWQ9c3JjaGRkO2ZpPWZpdDtoPTI0MDtxPTgwO3c9MjQw/https://s.yimg.com/zb/imgv1/e9d6381f-6a16-39d9-b6f9-1467838c022c/t_500x300" alt="instagram" width={30} /></Link></li>
        <li className="ms-4"><Link className="link-body-emphasis" to="#"><i className="fa-brands fa-linkedin fa-2xl" style={{color: "#3462b2",}}></i></Link></li>
        <li className="ms-4"><Link className="link-body-emphasis" to="#"><i class="fa-brands fa-youtube fa-2xl" style={{color: '#ca1c1c',}}></i></Link></li>
      </ul>
      </div>
    </div>
    <div className=" border-top">
      <p className='text-center'>© All rights reserved @ stmjournals.com</p>
     
    </div>
  </footer>

    
    </>
  )
}

export default Footer