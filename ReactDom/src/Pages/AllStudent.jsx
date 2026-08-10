import React from 'react'
import { Link } from "react-router-dom";
export default function AllStudent() {
  const students = [
    {
      id: 1,
      name: "Silambu ",
      course: "B.E CSE"
    },
    {
      id: 2,
      name: "Siva",
      course: "MBBS"
    },
    {
      id: 3,
      name: "Sridhar",
      course: "B.E ECE"
    }
  ];
  return (
    <div>
      <h1>All Students</h1>

      <p className="description">
        Here is the list of all students.
      </p>
<table border='1' >

          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Course</th>
             
            </tr>
          </thead>

          <tbody>

            {students.map((student) => (

              <tr key={student.id}>

                <td>{student.id}</td>

                <td>{student.name}</td>

                <td>{student.course}</td>

                

              </tr>

            ))}

          </tbody>

        </table>

      

    </div>
  )
}

