import React from "react";
import { useNavigate } from "react-router-dom";
import PrimaryBtn from "../Components/PrimaryBtn";

const Login = () => {
  const Navigate = useNavigate();
  const handleLogin = () => {
    Navigate("/administration");
  };
  return (
    <div className='container mt-5 p-5'>
      <div
        className='w-50 m-auto bg-light p-5 shadow'
        style={{ borderRadius: "13px" }}
      >
        <div>
          <h3 className='title mb-4'>
            Please Log in to Courety's administration
          </h3>
        </div>
        <form className='px-5'>
          <label>Email</label>
          <input
            type='email'
            className='form-control'
            placeholder='email@example.com'
          />
          <label>Password</label>
          <input
            type='password'
            className='form-control'
            placeholder='***********'
          />
          <div className='d-flex justify-content-between my-3'>
            <a className='title mt-2' style={{ fontWeight: "600" }} href='#'>
              Forgot password ?
            </a>
            <PrimaryBtn Context={"Connect"} Fn={handleLogin} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
