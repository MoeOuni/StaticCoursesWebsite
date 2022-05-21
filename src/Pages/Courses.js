import React from "react";
import CoursesList from "../Components/CoursesList";
import Navbar from "../Components/Navbar";

const Courses = () => {
  return (
    <div>
      <div className='background_courses'>
        <Navbar />
        <div className='container pt-3'>
          <h1
            className='mt-5 text-center title'
            style={{
              letterSpacing: "2px",
              fontWeight: "600",
            }}
          >
            Our Courses
          </h1>
          <div className='text-dark'>
            <form className='d-flex align-items-center flex-column'>
              <input
                className='form-control mb-3 res-input'
                type='search'
                placeholder='Search'
                aria-label='Search'
              />
              <div className='d-flex'>
                <button
                  className='purple_btn mb-2'
                  style={{ padding: "6px 10px", marginRight: "10px" }}
                  type='submit'
                >
                  Search
                </button>
                <div className='dropdown mb-2'>
                  <button
                    className='btn btn-secondary dropdown-toggle'
                    type='button'
                    id='dropdownMenu2'
                    data-bs-toggle='dropdown'
                    aria-expanded='false'
                  >
                    Sort by
                  </button>
                  <ul className='dropdown-menu' aria-labelledby='dropdownMenu2'>
                    <li>
                      <button className='dropdown-item' type='button'>
                        Higher Price
                      </button>
                    </li>
                    <li>
                      <button className='dropdown-item' type='button'>
                        Lower Price
                      </button>
                    </li>
                    <li>
                      <button className='dropdown-item' type='button'>
                        Category
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
            </form>
          </div>
        </div>
        <CoursesList />
      </div>
    </div>
  );
};

export default Courses;
