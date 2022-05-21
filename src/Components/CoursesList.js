import React from "react";
import { courses } from "../data";
import PrimaryBtn from "../Components/PrimaryBtn";
import { useNavigate } from "react-router-dom";

const CoursesList = () => {
  const Navigate = useNavigate();
  const NavToRegister = () => {
    Navigate("/register");
  };
  return (
    <div className='container'>
      <div className='row d-flex flex-column align-items-center'>
        {courses.map((cour) => {
          return (
            <div className='col-lg-6 col-md-12 col-sm-12'>
              <div className='card mb-3'>
                <div className='text-center'>
                  <img src={cour.image} className='card-img-top ' alt='...' />
                </div>
                <div className='card-body'>
                  <h5 className='card-title'>{cour.name}</h5>
                  <p className='card-text'>
                    {cour.bio} -{" "}
                    <span className='title' style={{ fontWeight: "bolder" }}>
                      {cour.lessons} Lessons
                    </span>
                    <br />
                    <span className='title' style={{ fontWeight: "bolder" }}>
                      Instructor:
                    </span>{" "}
                    {cour.instructor}
                    <br />
                    <span className='title' style={{ fontWeight: "bolder" }}>
                      Starting date:
                    </span>{" "}
                    {cour.startDate}
                  </p>
                  <div className='container d-flex justify-content-between'>
                    <PrimaryBtn Context={"Start now"} Fn={NavToRegister} />
                    <h6 style={{ marginTop: "13px" }} className='title'>
                      {cour.price} DT
                      {cour.discount > 0 && (
                        <span> with {cour.discount}% discount </span>
                      )}
                    </h6>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CoursesList;
