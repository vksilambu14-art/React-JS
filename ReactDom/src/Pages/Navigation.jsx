import React from 'react'
import { Link } from "react-router-dom";

export default function Navigation() {
  return (
    
    <div className='navigation'>
      <Link to='/'>Home</Link>
      <Link to='/About'>About</Link>
      <Link to='/Services'>Services</Link>
      <Link to='/Contact'>Contact</Link>
      <Link to='/Students'>Students</Link>
    </div>
    
  )
}
