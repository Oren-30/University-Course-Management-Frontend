import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import api from "../services/api";

function Courses() {

  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const response = await api.get("/courses");
      setCourses(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Navbar />

      <div className="container-fluid">
        <div className="row">

          <div className="col-md-2 bg-light min-vh-100">
            <Sidebar />
          </div>

          <div className="col-md-10 p-4">

            <div className="d-flex justify-content-between align-items-center mb-4">

              <h2>Courses</h2>

              <button className="btn btn-success">
                Add Course
              </button>

            </div>

            <input
              type="text"
              className="form-control mb-3"
              placeholder="Search Course..."
            />

            <div className="table-responsive">

              <table className="table table-bordered table-hover">

                <thead className="table-dark">

                  <tr>
                    <th>ID</th>
                    <th>Course Name</th>
                    <th>Department</th>
                    <th>Credits</th>
                    <th>Instructor</th>
                    <th>Actions</th>
                  </tr>

                </thead>

                <tbody>

                  {courses.length > 0 ? (

                    courses.map((course) => (

                      <tr key={course.id}>

                        <td>{course.id}</td>
                        <td>{course.course_name}</td>
                        <td>{course.department}</td>
                        <td>{course.credits}</td>
                        <td>{course.instructor_name}</td>

                        <td>

                          <button className="btn btn-warning btn-sm me-2">
                            Edit
                          </button>

                          <button className="btn btn-danger btn-sm">
                            Delete
                          </button>

                        </td>

                      </tr>

                    ))

                  ) : (

                    <tr>

                      <td colSpan="6" className="text-center">
                        No Courses Found
                      </td>

                    </tr>

                  )}

                </tbody>

              </table>

            </div>

          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default Courses;