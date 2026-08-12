import React from 'react'
import { NavLink } from 'react-router-dom';
export default function productNav() {
  return (
    <div>
    <div className='navbar'> 
      <h2>Product Store</h2>  
      <div className='navigation'>
          <NavLink to='/' className={({ isActive }) =>  {return isActive ? 'active' : 'inactive'}}>Home</NavLink>
          <NavLink to='/About' className={({ isActive }) => {return isActive ? 'active' : 'inactive'}}>About</NavLink>
          <NavLink to='/Products' className={({ isActive }) => {return isActive ? 'active' : 'inactive'}}>Products</NavLink>
          <NavLink to='/Contact' className={({ isActive }) => {return isActive ? 'active' : 'inactive'}}>Contact</NavLink>
        </div>
</div>

    </div>
  )
}
