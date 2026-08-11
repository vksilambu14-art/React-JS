import React from 'react'
import {NavLink, Link } from "react-router-dom";

export default function Navigation() {
  
  return (
    
    <div className='navigation'>
      <NavLink to='/' className={({ isActive }) =>  {return isActive ? 'active' : 'inactive'}}>Home</NavLink>
      <NavLink to='/About' className={({ isActive }) => {return isActive ? 'active' : 'inactive'}}>About</NavLink>
      <NavLink to='/Services' className={({ isActive }) => {return isActive ? 'active' : 'inactive'}}>Services</NavLink>
      <NavLink to='/Contact' className={({ isActive }) => {return isActive ? 'active' : 'inactive'}}>Contact</NavLink>
      <NavLink to='/Students' className={({ isActive }) => {return isActive ? 'active' : 'inactive'}}>Students</NavLink>
    </div>
    
  )
}
