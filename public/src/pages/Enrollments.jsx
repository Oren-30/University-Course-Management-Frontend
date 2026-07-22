import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import api from "../services/api";

function Enrollment() {
  const [enrollments, setEnrollments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEnrollments();
  }, []);

  const fetchEnrollments = async () => {
    try {
      const response = await api.get("/enrollments");
      setEnrollments(response.data);
    } catch (error) {
      console.error("Error fetching enrollments:", error);
    } finally {
      setLoading(false);
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
              <h2>Enrollment Management</h2>

              <button className="btn btn-success">
                Add Enrollment
              </button>
            </div>

            <input
              type="text"
              className="form-control mb-4"
              placeholder="Search enrollment..."
            />

            {loading ? (
              <div className="text-center">
                <h5>Loading...</h5>
              </div>
            ) : (
              <div className="table-responsive">

                <table className="table table-striped table-bordered">

                  <thead className="table-dark">
                    <tr>
                      <th>ID</th>
                      <th>Student</th>
                      <th>Course</th>
                      <th>Semester</th>
                      <th>Enrollment Date</th>
                      <th>Grade</th>
                      <th>Actions</th>
                    </tr>
                  </thead>

                  <tbody>

                    {enrollments.length > 0 ? (
                      enrollments.map((enrollment) => (
                        <tr key={enrollment.id}>
                          <td>{enrollment.id}</td>
                          <td>{enrollment.student_name}</td>
                          <td>{enrollment.course_name}</td>
                          <td>{enrollment.semester}</td>
                          <td>{enrollment.enrollment_date}</td>
                          <td>{enrollment.grade}</td>

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
                        <td colSpan="7" className="text-center">
                          No enrollments found.
                        </td>
                      </tr>
                    )}

                  </tbody>

                </table>

              </div>
            )}

          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default Enrollment;