import React from "react";
import { useNavigate } from "react-router-dom";
import img from "../Assets/Completed-amico.svg";

const Modal = () => {
  const Navigate = useNavigate();
  const Return = () => {
    Navigate("/");
  };
  return (
    <div
      class='modal fade'
      id='exampleModal'
      tabindex='-1'
      aria-labelledby='exampleModalLabel'
      aria-hidden='true'
    >
      <div class='modal-dialog'>
        <div class='modal-content'>
          <div class='modal-header'>
            <h5 class='modal-title title' id='exampleModalLabel'>
              Register completed successfuly
            </h5>
            <button
              type='button'
              class='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
            ></button>
          </div>
          <div class='modal-body' style={{ letterSpacing: "1px" }}>
            <div className='text-center'>
              <img
                src={img}
                style={{ width: "70%" }}
                className='border-bottom mb-3'
                alt='...'
              />
            </div>
            Thank you for Registering we you will get your bill for the course
            and all the information related to your course including the exact
            date and place in the{" "}
            <span className='title' style={{ fontWeight: "bolder" }}>
              provided email
            </span>
            .
          </div>

          <div class='modal-footer'>
            <button
              type='button'
              class='purple_btn'
              style={{ padding: "7px" }}
              data-bs-dismiss='modal'
              onClick={Return}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
