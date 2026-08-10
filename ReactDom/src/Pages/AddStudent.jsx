import React from 'react'

export default function AddStudent() {
  return (
   
      
    <div>

      <h1>Add Student</h1>

      <p className="description">
        Fill in the details to add a new student.
      </p>

      <form className="student-form">

        <label>Student Name</label>
        <input
          type="text"
          placeholder="Enter student name"
        />

        <label>Course</label>
        <input
          type="text"
          placeholder="Enter course"
        />

        <label>Email</label>
        <input
          type="email"
          placeholder="Enter email"
        />

        <button type="button" className="btn">
          Add Student
        </button>

      </form>
    </div>
  )
}
