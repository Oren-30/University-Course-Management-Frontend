import React, { useEffect, useState } from "react";
import api from "../services/api";

function Enrollments() {

  const [enrollments, setEnrollments] = useState([]);
  const [search, setSearch] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const enrollmentsPerPage = 5;

  useEffect(() => {
    fetchEnrollments();
  }, []);

  const fetchEnrollments = async () => {
    try {
      const response = await api.get("/enrollments/");
      setEnrollments(response.data.enrollments);
    } catch (error) {
      console.error("Error loading enrollments", error);
    }
  };

  // Search
  const filteredEnrollments = enrollments.filter(
    (enrollment) =>
      enrollment.status.toLowerCase().includes(search.toLowerCase()) ||
      (enrollment.grade || "")
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      enrollment.student_id.toString().includes(search) ||
      enrollment.course_id.toString().includes(search)
  );

  // Pagination
  const indexOfLastEnrollment =
    currentPage * enrollmentsPerPage;

  const indexOfFirstEnrollment =
    indexOfLastEnrollment - enrollmentsPerPage;

  const currentEnrollments = filteredEnrollments.slice(
    indexOfFirstEnrollment,
    indexOfLastEnrollment
  );

  const totalPages = Math.ceil(
    filteredEnrollments.length / enrollmentsPerPage
  );

  return (
    <div className="container mt-4">

      <h2>Enrollments</h2>

      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search enrollment..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table className="table table-bordered table-striped">

        <thead>
          <tr>
            <th>ID</th>
            <th>Student ID</th>
            <th>Course ID</th>
            <th>Enrollment Date</th>
            <th>Status</th>
            <th>Grade</th>
          </tr>
        </thead>

        <tbody>

          {currentEnrollments.map((enrollment) => (

            <tr key={enrollment.id}>

              <td>{enrollment.id}</td>

              <td>{enrollment.student_id}</td>

              <td>{enrollment.course_id}</td>

              <td>{enrollment.enrollment_date}</td>

              <td>{enrollment.status}</td>

              <td>{enrollment.grade || "-"}</td>

            </tr>

          ))}

        </tbody>

      </table>

      <div className="d-flex gap-2">

        <button
          className="btn btn-secondary"
          disabled={currentPage === 1}
          onClick={() =>
            setCurrentPage(currentPage - 1)
          }
        >
          Previous
        </button>

        <span className="align-self-center">
          Page {currentPage} of {totalPages || 1}
        </span>

        <button
          className="btn btn-secondary"
          disabled={
            currentPage === totalPages ||
            totalPages === 0
          }
          onClick={() =>
            setCurrentPage(currentPage + 1)
          }
        >
          Next
        </button>

      </div>

    </div>
  );
}

export default Enrollments;