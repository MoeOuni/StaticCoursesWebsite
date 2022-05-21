import React from "react";

const DeleteModal = ({ Fn, Data }) => {
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
              Delete Course
            </h5>
            <button
              type='button'
              class='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
            ></button>
          </div>
          <div class='modal-body' style={{ letterSpacing: "1px" }}>
            Are you sure you want to delete the course{" "}
            <span className='title' style={{ fontWeight: "600" }}>
              {Data.name}
            </span>{" "}
            instructed by{" "}
            <span className='title' style={{ fontWeight: "600" }}>
              {Data.instructor}
            </span>{" "}
            ?
          </div>

          <div class='modal-footer'>
            <button
              className='btn btn-danger'
              data-bs-dismiss='modal'
              onClick={Fn}
            >
              Delete
            </button>
            <button
              type='button'
              class='btn btn-secondary'
              style={{ padding: "7px" }}
              data-bs-dismiss='modal'
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
