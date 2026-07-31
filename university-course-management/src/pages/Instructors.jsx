import React, { useEffect, useState } from "react";
import api from "../services/api";

function Instructors() {

  const [instructors, setInstructors] = useState([]);
  const [search, setSearch] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const instructorsPerPage = 5;

  useEffect(() => {
    fetchInstructors();
  }, []);

  const fetchInstructors = async () => {
    try {
      const response = await api.get("/instructors/");
      setInstructors(response.data.instructors);
    } catch (error) {
      console.error("Error loading instructors", error);
    }
  };

  // Search
  const filteredInstructors = instructors.filter(
    (instructor) =>
      instructor.first_name.toLowerCase().includes(search.toLowerCase()) ||
      instructor.last_name.toLowerCase().includes(search.toLowerCase()) ||
      instructor.email.toLowerCase().includes(search.toLowerCase()) ||
      instructor.department.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination
  const indexOfLastInstructor = currentPage * instructorsPerPage;
  const indexOfFirstInstructor = indexOfLastInstructor - instructorsPerPage;

  const currentInstructors = filteredInstructors.slice(
    indexOfFirstInstructor,
    indexOfLastInstructor
  );

  const totalPages = Math.ceil(
    filteredInstructors.length / instructorsPerPage
  );

  return (
    <div className="container mt-4">

      <h2>Instructors</h2>

      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search instructor..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table className="table table-bordered table-striped">

        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Department</th>
            <th>Office</th>
          </tr>
        </thead>

        <tbody>

          {currentInstructors.map((instructor) => (

            <tr key={instructor.id}>

              <td>{instructor.id}</td>

              <td>
                {instructor.first_name} {instructor.last_name}
              </td>

              <td>{instructor.email}</td>

              <td>{instructor.phone || "-"}</td>

              <td>{instructor.department}</td>

              <td>{instructor.office || "-"}</td>

            </tr>

          ))}

        </tbody>

      </table>

      <div className="d-flex gap-2">

        <button
          className="btn btn-secondary"
          disabled={currentPage === 1}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          Previous
        </button>

        <span className="align-self-center">
          Page {currentPage} of {totalPages || 1}
        </span>

        <button
          className="btn btn-secondary"
          disabled={
            currentPage === totalPages || totalPages === 0
          }
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>

      </div>

    </div>
  );
}

export default Instructors;