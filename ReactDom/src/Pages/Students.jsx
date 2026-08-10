import React from 'react'
import { Link, Outlet } from "react-router-dom";
export default function Students() {
  return (
    <div className=" ">
        <h1>Students Pages</h1>
        <div className="students-menu">
        <h3>Students Menu</h3>
        <Link to="/Students/AllStudent">All Students</Link>
        <Link to="/Students/AddStudent">Add Student</Link>
        <Link to="/Students/StudentDetails">Student Details</Link>
        <Outlet />
        </div>
    </div>
  )
}
