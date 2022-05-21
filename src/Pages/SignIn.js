import React from "react";
import Navbar from "../Components/Navbar";
import leftIMG from "../Assets/Fingerprint-amico.svg";
import Modal from "../Components/Modal";

const SignIn = () => {
  return (
    <div className='background_signin'>
      <Navbar />
      <div className='container mt-5 pt-3'>
        <div className='row'>
          <div className='col-lg-6 d-none text-center d-lg-block'>
            <h2
              style={{ fontWeight: "400", letterSpacing: "1px" }}
              className='mt-3'
            >
              Enter your data and start learning now.
            </h2>
            <img src={leftIMG} alt='...' />
          </div>
          <div className='col-lg-6 col-md-12 col-sm-12'>
            <form className='bg-light bg-opacity-75 mt-5 p-5 shadow'>
              <h3>Fill your Please</h3>
              <label className='mt-2'>Full Name:</label>
              <input
                type='text'
                placeholder='Foulen Ben Foulen'
                className='form-control'
              />
              <label className='mt-2'>Email:</label>
              <input
                type='email'
                placeholder='example@example.com'
                className='form-control'
              />
              <label className='mt-2'>Phone Number:</label>
              <input
                type='number'
                placeholder='+21612345678'
                className='form-control'
              />
              <label className='mt-2'>Status:</label>
              <input
                type='text'
                placeholder='exp: Student, Teacher, Worker...'
                className='form-control'
              />
              <div className='mt-3'>
                <button
                  type='button'
                  class='purple_btn'
                  data-bs-toggle='modal'
                  data-bs-target='#exampleModal'
                  style={{ width: "30%", padding: "10px" }}
                >
                  Register
                </button>
                <button
                  className='purple_btn'
                  type='reset'
                  style={{ width: "30%", padding: "10px", marginLeft: "10px" }}
                >
                  Annuler
                </button>
              </div>
            </form>
          </div>
          <Modal />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
