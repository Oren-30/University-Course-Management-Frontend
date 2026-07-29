import React from "react";

function StudentCard({ student, onEdit, onDelete }) {
  return (
    <div className="card shadow-sm mb-4 h-100">

      <div className="card-body">

        {/* Student Image */}
        <div className="text-center mb-3">

          <img
            src="https://via.placeholder.com/120"
            alt="Student"
            className="rounded-circle"
            width="120"
            height="120"
          />

        </div>


        {/* Student Name */}
        <h4 className="card-title text-center text-primary">
          {student.first_name} {student.last_name}
        </h4>


        <hr />


        {/* Student Details */}
        <p>
          <strong>Email:</strong> {student.email}
        </p>


        <p>
          <strong>Student ID:</strong> {student.student_number}
        </p>


        <p>
          <strong>Department:</strong> {student.department}
        </p>