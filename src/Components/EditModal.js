import React from "react";

const EditModal = ({ Data }) => {
  return (
    <div
      class='modal fade'
      id='staticBackdrop'
      data-bs-backdrop='static'
      data-bs-keyboard='false'
      tabindex='-1'
      aria-labelledby='staticBackdropLabel'
      aria-hidden='true'
    >
      <div class='modal-dialog'>
        <div class='modal-content'>
          <div class='modal-header'>
            <h5 class='modal-title' id='staticBackdropLabel'>
              Edit Course
            </h5>
            <button
              type='button'
              class='btn-close'
              data-bs-dismiss='modal'
              aria-label='Close'
            ></button>
          </div>
          <div class='modal-body'>
            <form className='px-1 pt-2 res-block'>
              <div className='d-flex'>
                <div className='w-100 mx-2'>
                  <label>Name of the Course (Title)</label>
                  <input
                    value={Data.name}
                    type='text'
                    className='form-control mb-2'
                    placeholder='Name the course'
                  />
                </div>
                <div className='w-100 mx-2'>
                  <label>Starting Date</label>
                  <input type='date' className='form-control' />
                </div>
              </div>

              <div className='d-flex'>
                <div className='w-100 mx-2'>
                  <label>Price</label>
                  <input
                    value={Data.price}
                    type='number'
                    className='form-control mb-2'
                    placeholder='Price'
                  />
                </div>
                <div className='w-100 mx-2'>
                  <label>Discount</label>
                  <input
                    value={Data.discount}
                    type='number'
                    className='form-control mb-2'
                    placeholder='Discount'
                  />
                </div>
              </div>
              <div className='d-flex'>
                <div className='w-100 mx-2'>
                  <label>Instructor</label>
                  <select className='form-select mb-2'>
                    <option>Alex</option>
                    <option>Amal</option>
                    <option>Amir</option>
                  </select>
                </div>
                <div className='w-100 mx-2'>
                  <label>Lessons number</label>
                  <input
                    value={Data.lessons}
                    type='number'
                    className='form-control'
                    placeholder='Lessons number'
                  />
                </div>
              </div>
              <div className='mx-2'>
                <label for='formFileLg' class='form-label'>
                  Cover Image{" "}
                </label>
                <input
                  class='form-control form-control-lg'
                  id='formFileLg'
                  type='file'
                />
              </div>

              <div className=' mx-2'>
                <label>Bio</label>
                <textarea
                  value={Data.bio}
                  className='form-control'
                  style={{ height: "120px" }}
                  placeholder='Summary about the course that will simplify the course title...'
                />
              </div>
            </form>
          </div>
          <div class='modal-footer'>
            <button
              type='button'
              class='btn btn-secondary'
              data-bs-dismiss='modal'
            >
              Close
            </button>
            <button type='button' class='btn btn-success'>
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
