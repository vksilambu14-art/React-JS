import React from 'react'

export default function StudentDetails() {
  return (
    <div>
       <h1>Student Details</h1>

      <p className="description">
        View details of a specific student.
      </p>

      <div className="student-detail-card">

        <div className="student-avatar">
          👨‍🎓
        </div>

        <div>
          <p>
            <strong>ID:</strong> 1
          </p>

          <p>
            <strong>Name:</strong> Silambu
          </p>
          <p>
            <strong>Course:</strong> B.E CSE
          </p>
          <p>
            <strong>Phone:</strong> +91 9025756596
          </p>
        </div>

      </div>
    </div>
  )
}
