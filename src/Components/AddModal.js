import React from "react";

const AddModal = ({ Fn }) => {
  const handleNav = () => {
    Fn(3);
  };
  return (
    <div
      class='modal fade'
      id='dropDown'
      tabindex='-1'
      aria-labelledby='exampleModalLabel'
      aria-hidden='true'
    >
      <div class='modal-dialog'>
        <div class='modal-content'>
          <div class='modal-header'>
            <h5 class='modal-title title' id='exampleModalLabel'>
              Course Added Successfuly
            </h5>
            <button
              type='button'
              class='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
            ></button>
          </div>
          <div class='modal-body' style={{ letterSpacing: "1px" }}>
            Your Course has been added to the list{" "}
            <span className='title' style={{ fontWeight: "600" }}>
              Successfuly
            </span>
            , You want to add an
            <span className='title' style={{ fontWeight: "600" }}>
              {" "}
              Other
            </span>{" "}
            Or{" "}
            <span className='title' style={{ fontWeight: "600" }}>
              Inspected in the List
            </span>{" "}
            ?
          </div>

          <div class='modal-footer'>
            <button
              className='btn btn-primary'
              onClick={handleNav}
              data-bs-dismiss='modal'
            >
              Continue
            </button>
            <button
              type='button'
              class='btn btn-secondary'
              style={{ padding: "7px" }}
              data-bs-dismiss='modal'
            >
              Add an Other
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddModal;
