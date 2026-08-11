import React from 'react'
import { Link, NavLink, Outlet } from "react-router-dom";

export default function Students() {
  return (
    <div className=" ">
        <h1>Students Pages</h1>
        <div className="students-menu ">
        <h3>Students Menu</h3>
        <NavLink to="/Students/AllStudent" className={({ isActive }) => {return isActive ? 'activeted' : 'inactiveted'}}>All Students</NavLink>
        <NavLink to="/Students/AddStudent" className={({ isActive }) => {return isActive ? 'activeted' : 'inactiveted'}}>Add Student</NavLink>
        <NavLink to="/Students/StudentDetails" className={({ isActive }) => {return isActive ? 'activeted' : 'inactiveted'}}>Student Details</NavLink>
        <NavLink to="/Students/Login" className={({ isActive }) => {return isActive ? 'activeted' : 'inactiveted'}}>Login</NavLink>
        <Outlet />
        </div>
    </div>
  )
}
