import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className='navbar navbar-light bg-body fixed-top shadow-sm'>
      <div className='container-fluid'>
        <Link
          to='/'
          className='navbar-brand title'
          style={{ fontWeight: "700" }}
        >
          Courety
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-bs-toggle='offcanvas'
          data-bs-target='#offcanvasNavbar'
          aria-controls='offcanvasNavbar'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div
          className='offcanvas offcanvas-end'
          tabindex='-1'
          id='offcanvasNavbar'
          aria-labelledby='offcanvasNavbarLabel'
        >
          <div className='offcanvas-header'>
            <h5 className='offcanvas-title title' id='offcanvasNavbarLabel'>
              Courety
            </h5>
            <button
              type='button'
              className='btn-close text-reset'
              data-bs-dismiss='offcanvas'
              aria-label='Close'
            ></button>
          </div>
          <div className='offcanvas-body'>
            <ul className='navbar-nav justify-content-end flex-grow-1 pe-3'>
              <li className='nav-item'>
                <Link to='/' className='nav-link active'>
                  Home
                </Link>
              </li>
              <li className='nav-item'>
                <Link to='/courses' className='nav-link active'>
                  Courses
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
