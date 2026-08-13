import React from 'react'
import { Link, NavLink, useSearchParams } from "react-router-dom";
import useFetch from './Hooks/useFetch';
export default function Students() {
  const [searchParams, setSearchParams] = useSearchParams();
const { data:students, loading, error } = useFetch("https://jsonplaceholder.typicode.com/users");
const searchName = searchParams.get("name") ||"";
const handleSearch=(e)=>{
const  value=e.target.value;
if(value){
  setSearchParams({name:value})
}
else {
      
      setSearchParams({});
    }
}
const filterData=students.filter((stdname)=>
  stdname.name.toLowerCase().includes(searchName.toLowerCase())
);
if(loading){
  return (
      <div className="page">
        <h2>Loading students...</h2>
      </div>
    );
}
if(error){
  return (
      <div className="page">
        <h2>{error}</h2>
      </div>
    );
}
  return (
    <div className=" ">
        
        {/* <div className="students-menu ">
        <h3>Students Menu</h3>
        <NavLink to="/Students/AllStudent" className={({ isActive }) => {return isActive ? 'activeted' : 'inactiveted'}}>All Students</NavLink>
        <NavLink to="/Students/AddStudent" className={({ isActive }) => {return isActive ? 'activeted' : 'inactiveted'}}>Add Student</NavLink>
        <NavLink to="/Students/StudentDetails" className={({ isActive }) => {return isActive ? 'activeted' : 'inactiveted'}}>Student Details</NavLink>
        <NavLink to="/Students/Login" className={({ isActive }) => {return isActive ? 'activeted' : 'inactiveted'}}>Login</NavLink>
        <Outlet />
        </div> */}
        <div className="page">
      

      {/* Search */}
      <div className="search-box">
        <h1>Students Pages</h1>
        <input
          type="text"
          placeholder="Search Student"
          value={searchName}
          onChange={handleSearch}
        />
      </div>

      {/* Student List */}
      <div className="student-container">
        {filterData.length === 0 ? (
          <h3>No students found.</h3>
        ) : (
          filterData.map((student) => (
            <div className="student-card" key={student.id}>
              <h2>{student.name}</h2>

              <p>
                <strong>Email:</strong> {student.email}
              </p>

              <p>
                <strong>Phone:</strong> {student.phone}
              </p>

              <p>
                <strong>City:</strong> {student.address.city}
              </p>

              <p>
                <strong>Company:</strong> {student.company.name}
              </p>

              <Link
                className="details-btn"
                to={`/Students/${student.id}`}>
                View Details
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
    </div>
    
  )
}
