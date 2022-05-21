import React from "react";
import AddModal from "./AddModal";

const AddCourse = ({ ChangePage }) => {
  return (
    <div className='mt-5'>
      <div className='pt-3 pb-2 mb-3 border-bottom'>
        <h1 className='h2'>Add Course</h1>
      </div>
      <div className=''>
        <h1 className='h3' style={{ letterSpacing: "1px", fontWeight: "400" }}>
          Verify the data before submitting
        </h1>
        <form className='px-1 pt-2 res-block'>
          <div className='d-flex'>
            <div className='w-100 mx-2'>
              <label>Name of the Course (Title)</label>
              <input
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
                type='number'
                className='form-control mb-2'
                placeholder='Price'
              />
            </div>
            <div className='w-100 mx-2'>
              <label>Discount</label>
              <input
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
              className='form-control'
              style={{ height: "120px" }}
              placeholder='Summary about the course that will simplify the course title...'
            />
          </div>
          <div className='mt-2 float-end'>
            <button
              type='button'
              className='btn btn-primary px-4'
              data-bs-toggle='modal'
              data-bs-target='#dropDown'
            >
              Submit
            </button>
            <button className='btn btn-secondary mx-1 px-4'>Cancel</button>
          </div>
        </form>
        <AddModal Fn={ChangePage} />
      </div>
    </div>
  );
};

export default AddCourse;
