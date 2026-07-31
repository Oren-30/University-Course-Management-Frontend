import React, { useEffect, useState } from "react";
import api from "../services/api";

function Courses() {

  const [courses, setCourses] = useState([]);
  const [search, setSearch] = useState("");

  const [currentPage, setCurrentPage] = useState(1);
  const coursesPerPage = 5;

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await api.get("/courses/");
      setCourses(response.data.courses);
    } catch (error) {
      console.error("Error loading courses", error);
    }
  };

  // Search courses
  const filteredCourses = courses.filter(
    (course) =>
      course.course_name.toLowerCase().includes(search.toLowerCase()) ||
      course.course_code.toLowerCase().includes(search.toLowerCase()) ||
      course.department.toLowerCase().includes(search.toLowerCase())
  );

  // Pagination
  const indexOfLastCourse = currentPage * coursesPerPage;
  const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;

  const currentCourses = filteredCourses.slice(
    indexOfFirstCourse,
    indexOfLastCourse
  );

  const totalPages = Math.ceil(
    filteredCourses.length / coursesPerPage
  );

  return (
    <div className="container mt-4">

      <h2>Courses</h2>

      <input
        type="text"
        className="form-control mb-3"
        placeholder="Search course..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <table className="table table-bordered table-striped">

        <thead>
          <tr>
            <th>ID</th>
            <th>Course Code</th>
            <th>Course Name</th>
            <th>Credits</th>
            <th>Department</th>
            <th>Semester</th>
          </tr>
        </thead>

        <tbody>

          {currentCourses.map((course) => (

            <tr key={course.id}>

              <td>{course.id}</td>

              <td>{course.course_code}</td>

              <td>{course.course_name}</td>

              <td>{course.credits}</td>

              <td>{course.department}</td>

              <td>{course.semester}</td>

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
          disabled={currentPage === totalPages || totalPages === 0}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          Next
        </button>

      </div>

    </div>
  );
}

export default Courses;