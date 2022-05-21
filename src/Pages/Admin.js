import React, { useState } from "react";
import AddCourse from "../Components/AddCourse";
import Dashboard from "../Components/Dashboard";
import FixedNavbar from "../Components/FixedNavbar";
import ListCourses from "../Components/ListCourses";
import Statics from "../Components/Statics";
import StickySideBar from "../Components/StickySideBar";

const Admin = () => {
  const [page, setPage] = useState(1);
  const ChangePage = (NavPage) => {
    setPage(NavPage);
  };
  return (
    <div>
      <FixedNavbar />
      <div className='container-fluid'>
        <div className='row'>
          <nav className='col-md-2 d-none d-md-block bg-dark vh-100 text-light '>
            <StickySideBar handleChange={ChangePage} />
          </nav>
          <div className='col-md-9 ml-sm-auto col-lg-10 px-4 bg-light'>
            {page === 1 && <Statics />}
            {page === 4 && <Dashboard />}
            {page === 2 && <AddCourse ChangePage={ChangePage} />}
            {page === 3 && <ListCourses />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
