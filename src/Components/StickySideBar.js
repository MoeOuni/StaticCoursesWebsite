import React from "react";

const StickySideBar = ({ handleChange }) => {
  const dashBoard = () => {
    handleChange(1);
  };
  const customersList = () => {
    handleChange(4);
  };
  const addCourse = () => {
    handleChange(2);
  };
  const ListCourse = () => {
    handleChange(3);
  };
  return (
    <div className='sidebar-sticky mt-5'>
      <ul className='nav flex-column '>
        <li
          className='nav-item mb-2 mt-3'
          style={{ fontSize: "18px", fontWeight: "500" }}
        >
          <a
            className='text-white text-decoration-none mx-4'
            href='#'
            onClick={dashBoard}
          >
            Dashboard
          </a>
        </li>
        <li
          className='nav-item mb-2'
          style={{ fontSize: "18px", fontWeight: "500" }}
        >
          <a
            className='text-white text-decoration-none mx-4'
            href='#'
            onClick={customersList}
          >
            Customers
          </a>
        </li>

        <li
          className='nav-item mb-2'
          style={{ fontSize: "18px", fontWeight: "500" }}
        >
          <div class='dropdown'>
            <a
              class='text-white text-decoration-none mx-4 dropdown-toggle'
              type='button'
              id='dropdownMenuButton1'
              data-bs-toggle='dropdown'
              aria-expanded='false'
            >
              Courses
            </a>
            <ul
              class='dropdown-menu mx-2'
              aria-labelledby='dropdownMenuButton1'
            >
              <li>
                <a class='dropdown-item ' href='#' onClick={addCourse}>
                  Add Course
                </a>
              </li>

              <li>
                <a class='dropdown-item ' href='#' onClick={ListCourse}>
                  List Course
                </a>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default StickySideBar;
