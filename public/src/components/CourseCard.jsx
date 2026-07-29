import React from "react";

function CourseCard({ course, onEdit, onDelete }) {
  return (
    <div className="card shadow-sm mb-4 h-100">
      <div className="card-body">

        <h4 className="card-title text-primary">
          {course.course_name}
        </h4>

        <hr />

        <p>
          <strong>Course Code:</strong> {course.course_code}
        </p>

        <p>
          <strong>Department:</strong> {course.department}
        </p>

        <p>
          <strong>Credits:</strong> {course.credits}
        </p>

        <p>
          <strong>Instructor:</strong> {course.instructor_name}
        </p>

        <p>
          <strong>Description:</strong>
          <br />
          {course.description}
        </p>

        <div className="d-flex justify-content-between mt-4">

          <button
            className="btn btn-warning"
            onClick={() => onEdit(course)}
          >
            Edit
          </button>

          <button
            className="btn btn-danger"
            onClick={() => onDelete(course.id)}
          >
            Delete
          </button>

        </div>

      </div>
    </div>
  );
}

export default CourseCard;