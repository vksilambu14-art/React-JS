import React from 'react'
import { useState,useId } from 'react'

export default function AddStudent() {

const studentNameId = useId();
  const emailId = useId();
  const phoneId = useId();
  const courseId = useId();

const [student, setStudent] = useState({
    name: "",
    email: "",
    phone: "",
    course: ""
  });
   const handleChange = (event) => {
    const { name, value } = event.target;

    setStudent({
      ...student,
      [name]: value
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    alert(
      `Student Added Successfully!\nName: ${student.name}`
    );

    setStudent({
      name: "",
      email: "",
      phone: "",
      course: ""
    });
  };


  return (
   
      
    <div>

      <h1>Add Student</h1>

      <p className="description">
        Fill in the details to add a new student.
      </p>

     

        <form onSubmit={handleSubmit} className="student-form">

        {/* Student Name */}
        <div className="form-group">

          <label htmlFor={studentNameId}>
            Student Name:
          </label>

          <input
            id={studentNameId}
            type="text"
            name="name"
            placeholder="Enter student name"
            value={student.name}
            onChange={handleChange}
            required
          />

        </div>

       
        <div className="form-group">

          <label htmlFor={emailId}>
            Email:
          </label>

          <input
            id={emailId}
            type="email"
            name="email"
            placeholder="Enter email"
            value={student.email}
            onChange={handleChange}
            required
          />

        </div>

        
        <div className="form-group">

          <label htmlFor={phoneId}>
            Phone Number:
          </label>

          <input
            id={phoneId}
            type="tel"
            name="phone"
            placeholder="Enter phone number"
            value={student.phone}
            onChange={handleChange}
            required
          />

        </div>

        
        <div className="form-group">

          <label htmlFor={courseId}>
            Course:
          </label>

          <select
            id={courseId}
            name="course"
            value={student.course}
            onChange={handleChange}
            required
          >

            <option value="">
              Select Course
            </option>

            <option value="React JS">
              React JS
            </option>

            <option value="Java">
              Java
            </option>

            <option value="Python">
              Python
            </option>

            <option value="Full Stack">
              Full Stack
            </option>

          </select>

        </div>

        <button type="submit" className="btn submit-btn">
          Add Student
        </button>

      </form>
    </div>
  )
}
