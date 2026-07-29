import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";
import api from "../services/api";

function Instructors() {

  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    fetchInstructors();
  }, []);

  const fetchInstructors = async () => {
    try {
      const response = await api.get("/instructors");
      setInstructors(response.data);
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

              <h2>Instructors</h2>

              <button className="btn btn-primary">
                Add Instructor
              </button>

            </div>

            <input
              type="text"
              className="form-control mb-3"
              placeholder="Search Instructor..."
            />

            <div className="table-responsive">

              <table className="table table-bordered table-hover">

                <thead className="table-dark">

                  <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Office</th>
                    <th>Actions</th>
                  </tr>

                </thead>

                <tbody>

                  {instructors.length > 0 ? (

                    instructors.map((instructor) => (

                      <tr key={instructor.id}>

                        <td>{instructor.id}</td>
                        <td>{instructor.first_name}</td>
                        <td>{instructor.last_name}</td>
                        <td>{instructor.email}</td>
                        <td>{instructor.office}</td>

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
                        No Instructors Found
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

export default Instructors;