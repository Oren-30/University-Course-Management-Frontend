import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import api from "../services/api";

function Students() {

  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const response = await api.get("/students");
      setStudents(response.data);
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

              <h2>Students</h2>

              <button className="btn btn-primary">
                Add Student
              </button>

            </div>

            <div className="mb-3">

              <input
                type="text"
                className="form-control"
                placeholder="Search Student..."
              />

            </div>

            <div className="table-responsive">

              <table className="table table-bordered table-hover">

                <thead className="table-dark">

                  <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Actions</th>
                  </tr>

                </thead>

                <tbody>

                  {students.length > 0 ? (

                    students.map((student) => (

                      <tr key={student.id}>

                        <td>{student.id}</td>

                        <td>{student.first_name}</td>

                        <td>{student.last_name}</td>

                        <td>{student.email}</td>

                        <td>{student.phone}</td>

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

                      <td
                        colSpan="6"
                        className="text-center"
                      >
                        No Students Found
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

export default Students;