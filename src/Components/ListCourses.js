import React, { useState } from "react";
import { courses } from "../data";
import DeleteModal from "./DeleteModal";
import EditModal from "./EditModal";
const ListCourses = () => {
  const [course, setCourse] = useState(courses);

  const [toDelete, setToDelete] = useState({
    idx: 1002,
    name: "Backend development",
    instructor: "Alex",
    price: 130,
    discount: 50,
    bio: "Backend development focuses on the functionality of the website unlike the frontend where it focus on the design and the layout it's crucial to know the basics of it, you will learn it using the PHP programing language.",
    lessons: 8,
    startDate: "01/02/2022",
  });

  const handleClick = (e) => {
    var array = course.filter((elem) => parseInt(e.target.id) === elem.idx);
    setToDelete(array[0]);
    console.log(toDelete);
  };

  const handleClickSecond = (e) => {
    var array = course.filter((elem) => parseInt(e.target.name) === elem.idx);
    setToDelete(array[0]);
    console.log(toDelete);
  };

  const handleDelete = () => {
    var new_array = course.filter(
      (elem) => parseInt(toDelete.idx) !== elem.idx,
    );
    setCourse(new_array);
  };

  return (
    <div className='mt-5'>
      <div className='pt-3 pb-2 mb-3 border-bottom'>
        <h1 className='h2'>Courses List</h1>
      </div>
      <div className='table-responsive'>
        <table className='table table-striped table-sm'>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Price</th>
              <th>Instructor</th>
              <th>Lessons</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {course.map((cour) => {
              return (
                <tr>
                  <td>{cour.idx}</td>
                  <td>{cour.name}</td>
                  <td>
                    {cour.price} ({cour.discount}% discount)
                  </td>
                  <td>{cour.instructor}</td>
                  <td>{cour.lessons}</td>
                  <td>
                    <button
                      type='button'
                      class='btn btn-danger mx-2'
                      data-bs-toggle='modal'
                      data-bs-target='#exampleModal'
                      id={cour.idx}
                      onClick={handleClick}
                    >
                      Delete
                    </button>
                    <button
                      type='button'
                      className='btn btn-success mx-2'
                      name={cour.idx}
                      data-bs-toggle='modal'
                      data-bs-target='#staticBackdrop'
                      onClick={handleClickSecond}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <DeleteModal Fn={handleDelete} Data={toDelete} />
        <EditModal Data={toDelete} />
      </div>
    </div>
  );
};

export default ListCourses;
