import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import api from "../services/api";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

function Dashboard() {
  const [stats, setStats] = useState({
    students: 0,
    courses: 0,
    instructors: 0,
    enrollments: 0,
  });

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const storedUser = JSON.parse(localStorage.getItem("user"));
      setUser(storedUser);

      const [
        studentsRes,
        coursesRes,
        instructorsRes,
        enrollmentsRes,
      ] = await Promise.all([
        api.get("/students/"),
        api.get("/courses/"),
        api.get("/instructors/"),
        api.get("/enrollments/"),
      ]);

      setStats({
        students: studentsRes.data.length,
        courses: coursesRes.data.length,
        instructors: instructorsRes.data.length,
        enrollments: enrollmentsRes.data.length,
      });
    } catch (error) {
      console.error("Dashboard Error:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="container mt-5">
          <h3>Loading Dashboard...</h3>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />

      <div className="container-fluid">
        <div className="row">

          <div className="col-md-2 bg-light min-vh-100">
            <Sidebar />
          </div>

          <div className="col-md-10 p-4">

            <h2>Welcome, {user?.first_name}</h2>
            <p className="text-muted">
              Logged in as <strong>{user?.role}</strong>
            </p>

            <div className="row">

              <div className="col-md-3 mb-4">
                <div className="card text-center shadow">
                  <div className="card-body">
                    <h5>Total Students</h5>
                    <h2>{stats.students}</h2>
                  </div>
                </div>
              </div>

              <div className="col-md-3 mb-4">
                <div className="card text-center shadow">
                  <div className="card-body">
                    <h5>Total Courses</h5>
                    <h2>{stats.courses}</h2>
                  </div>
                </div>
              </div>

              <div className="col-md-3 mb-4">
                <div className="card text-center shadow">
                  <div className="card-body">
                    <h5>Total Instructors</h5>
                    <h2>{stats.instructors}</h2>
                  </div>
                </div>
              </div>

              <div className="col-md-3 mb-4">
                <div className="card text-center shadow">
                  <div className="card-body">
                    <h5>Total Enrollments</h5>
                    <h2>{stats.enrollments}</h2>
                  </div>
                </div>
              </div>

            </div>

            <div className="card shadow mt-4">
              <div className="card-body">

                <h4>Quick Navigation</h4>

                <div className="d-flex flex-wrap gap-3 mt-3">

                  <Link to="/students" className="btn btn-primary">
                    Students
                  </Link>

                  <Link to="/courses" className="btn btn-success">
                    Courses
                  </Link>

                  <Link to="/instructors" className="btn btn-warning">
                    Instructors
                  </Link>

                  <Link
                    to="/enrollments"
                    className="btn btn-info text-white"
                  >
                    Enrollments
                  </Link>

                  <Link to="/profile" className="btn btn-dark">
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