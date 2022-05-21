import React from "react";
import { Link } from "react-router-dom";
const FixedNavbar = () => {
  return (
    <nav class=' navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-1 shadow'>
      <a class='navbar-brand col-sm-3 col-md-2 mr-0 ' href='#'>
        Courety
      </a>
      <ul class='navbar-nav px-3'>
        <li class='nav-item text-nowrap'>
          <Link to='/login' className='nav-link'>
            Sign out
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default FixedNavbar;
