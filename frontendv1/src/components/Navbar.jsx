import React from 'react'
import { Link } from 'react-router-dom'
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from './LoginButto';

const Navbar = () => {
  const { isAuthenticated, user, logout } = useAuth0();
  return (
    <>
      <nav className="navbar navbar-expand-lg  sticky-top bg-light shadow-sm ">
        <div className="container-fluid ">
          <Link className="navbar-brand" to="/">
            <img src='https://stmconferences.com/wp-content/uploads/2023/03/stmconf..png' width={'150'} alt="logo" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-10 mb-2 mb-lg-0 m-2">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/aboutus">About</Link>
              </li> <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/services">Services</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/news">News</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/events">Events</Link>
              </li>
              <li className="nav-item dropdown">
                <Link className="nav-link dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Faq
                </Link>
                <ul className="dropdown-menu">
                  <li><Link className="dropdown-item" to="#">Privacy policy</Link></li>
                  <li><Link className="dropdown-item" to="/contact">Contact Us</Link></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><Link className="dropdown-item" to="#">Something else here</Link></li>
                </ul>
              </li>
            </ul>


            {
              isAuthenticated ? (
                <div className="mt-2">
                  <Link to='/dashboard' ><button className="btn btn-outline-success" type="submit">Admin Pannel</button></Link>
                  <button className='btn btn-primary btn-lg mx-2' onClick={() => logout({ logoutParams: { returnTo: window.location.origin } })}>
                    Log Out
                  </button>
              {isAuthenticated && <img src={user.picture} width={50} style={{borderRadius:'50%'}} alt={user.name}></img>}

                </div>

              ) : (

                <LoginButton />

              )
            }

          </div>

        </div>
      </nav>




    </>
  )
}

export default Navbar