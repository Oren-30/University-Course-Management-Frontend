import React, { useEffect, useState } from "react";
import api from "../services/api";

function Students() {
  const [students, setStudents] = useState([]);
  const [search, setSearch] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const studentsPerPage = 5;

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await api.get("/students/");
      setStudents(response.data.students);
    } catch (error) {
      console.error("Error loading students", error);
    }
  };

  // Search students
  const filteredStudents = students.filter(
    (student) =>
      student.first_name.toLowerCase().includes(search.toLowerCase()) ||
      student.last_name.toLowerCase().includes(search.toLowerCase()) ||
      student.student_number.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination
  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;

  const currentStudents = filteredStudents.slice(
    indexOfFirstStudent,
    indexOfLastStudent
  );

  const totalPages = Math.ceil(
    filteredStudents.length / studentsPerPage
  );

  return (
    <div className="container mt-4">

      <h2>Students</h2>

      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search student..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Student Table */}
      <table className="table table-bordered table-striped">

        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Student No.</th>
            <th>Email</th>
            <th>Department</th>
          </tr>
        </thead>

        <tbody>

          {currentStudents.map((student) => (

            <tr key={student.id}>

              <td>{student.id}</td>

              <td>
                {student.first_name} {student.last_name}
              </td>

              <td>{student.student_number}</td>

              <td>{student.email}</td>

              <td>{student.department}</td>

            </tr>

          ))}

        </tbody>

      </table>

      {/* Pagination */}
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
          disabled={currentPage === totalPages || totalPages === 0}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>

      </div>

    </div>
  );
}

export default Students;