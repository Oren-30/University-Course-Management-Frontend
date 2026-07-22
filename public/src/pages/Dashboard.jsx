import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="container-fluid">
        <div className="row">

          <div className="col-md-2 bg-light min-vh-100">
            <Sidebar />
          </div>

          <div className="col-md-10 p-4">

            <h2 className="mb-4">
              Dashboard
            </h2>

            <div className="row">

              <div className="col-md-3 mb-4">
                <div className="card text-center shadow">
                  <div className="card-body">
                    <h5>Total Students</h5>
                    <h2>120</h2>
                  </div>
                </div>
              </div>

              <div className="col-md-3 mb-4">
                <div className="card text-center shadow">
                  <div className="card-body">
                    <h5>Total Courses</h5>
                    <h2>25</h2>
                  </div>
                </div>
              </div>

              <div className="col-md-3 mb-4">
                <div className="card text-center shadow">
                  <div className="card-body">
                    <h5>Instructors</h5>
                    <h2>18</h2>
                  </div>
                </div>
              </div>

              <div className="col-md-3 mb-4">
                <div className="card text-center shadow">
                  <div className="card-body">
                    <h5>Enrollments</h5>
                    <h2>300</h2>
                  </div>
                </div>
              </div>

            </div>

            <div className="card shadow mt-4">
              <div className="card-body">

                <h4>Quick Navigation</h4>

                <div className="d-flex flex-wrap gap-3 mt-3">

                  <Link
                    to="/students"
                    className="btn btn-primary"
                  >
                    Students
                  </Link>

                  <Link
                    to="/courses"
                    className="btn btn-success"
                  >
                    Courses
                  </Link>

                  <Link
                    to="/instructors"
                    className="btn btn-warning"
                  >
                    Instructors
                  </Link>

                  <Link
                    to="/enrollments"
                    className="btn btn-info text-white"
                  >
                    Enrollments
                  </Link>

                  <Link
                    to="/profile"
                    className="btn btn-dark"
                  >
                    Profile
                  </Link>

                </div>

              </div>
            </div>

          </div>

        </div>
      </div>

      <Footer />
    </>
  );
}

export default Dashboard;
