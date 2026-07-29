import React from "react";

function InstructorCard({ instructor, onEdit, onDelete }) {
  return (
    <div className="card shadow-sm mb-4 h-100">

      <div className="card-body">

        <div className="text-center mb-3">

          <img
            src="https://via.placeholder.com/120"
            alt="Instructor"
            className="rounded-circle"
            width="120"
            height="120"
          />

        </div>


        <h4 className="card-title text-center text-primary">
          {instructor.first_name} {instructor.last_name}
        </h4>


        <hr />


        <p>
          <strong>Email:</strong> {instructor.email}
        </p>


        <p>
          <strong>Department:</strong> {instructor.department}
        </p>


        <p>
          <strong>Specialization:</strong> {instructor.specialization}
        </p>


        <p>
          <strong>Phone:</strong> {instructor.phone}
        </p>


        <div className="d-flex justify-content-between mt-4">

          <button
            className="btn btn-warning"
            onClick={() => onEdit(instructor)}
          >
            Edit
          </button>


          <button
            className="btn btn-danger"
            onClick={() => onDelete(instructor.id)}
          >
            Delete
          </button>

        </div>

      </div>

    </div>
  );
}

export default InstructorCard;