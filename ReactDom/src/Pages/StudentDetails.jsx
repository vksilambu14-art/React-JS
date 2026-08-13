import React from 'react'
import{useParams,Link} from 'react-router-dom';
import useFetch from './Hooks/useFetch';

export default function StudentDetails() {
const{id}=useParams();
const {
    data: students,
    loading,
    error,
  } = useFetch("https://jsonplaceholder.typicode.com/users");
if (loading) {
    return (
      <div className="page">
        <h2>Loading student details...</h2>
      </div>
    );
  }

  if (error) {
    return (
      <div className="page">
        <h2>{error}</h2>
      </div>
    );
  }
  const student=students.find((stud)=>stud.id===Number(id));
  if(!student){
    return (
      <div className="page">
        <h2>Student not found.</h2>
        <Link to="/Students">Back to Students</Link>
      </div>
    );
  
  }
  return (
    <div className="page">
      <div className="details-card">
        <h1>Student Details</h1>

        <h2>{student.name}</h2>

        <p>
          <strong>ID:</strong> {student.id}
        </p>

        <p>
          <strong>Username:</strong> {student.username}
        </p>

        <p>
          <strong>Email:</strong> {student.email}
        </p>

        <p>
          <strong>Phone:</strong> {student.phone}
        </p>

        <h3>Address:</h3>

        <p>
          {student.address.street}, {student.address.suite}
        </p>

        <p>
          {student.address.city} - {student.address.zipcode}
        </p>

        <h3>Company:</h3>

        <p>
          <strong>Name:</strong> {student.company.name}
        </p>

        <p>
          <strong>Catch Phrase:</strong> {student.company.catchPhrase}
        </p>

        <Link className="details-btn" to="/Students">
          Back to Students
        </Link>
      </div>
    </div>
  )
}
