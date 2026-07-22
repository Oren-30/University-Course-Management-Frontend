import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navbar />

      {/* Hero Section */}
      <div className="container py-5">
        <div className="text-center">
          <h1 className="display-4 fw-bold">
            University Course Management System
          </h1>

          <p className="lead mt-3">
            Manage students, instructors, courses, and enrollments efficiently
            from one platform.
          </p>

          <div className="mt-4">
            <Link to="/login" className="btn btn-primary me-3">
              Login
            </Link>

            <Link to="/register" className="btn btn-success">
              Register
            </Link>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="container mb-5">
        <div className="row">

          <div className="col-md-4 mb-4">
            <div className="card shadow h-100">
              <div className="card-body text-center">
                <h3>Students</h3>

                <p>
                  Add, edit, delete, and search student records with ease.
                </p>

                <Link
                  to="/students"
                  className="btn btn-outline-primary"
                >
                  View Students
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow h-100">
              <div className="card-body text-center">
                <h3>Courses</h3>

                <p>
                  Create and manage university courses and departments.
                </p>

                <Link
                  to="/courses"
                  className="btn btn-outline-success"
                >
                  View Courses
                </Link>
              </div>
            </div>
          </div>

          <div className="col-md-4 mb-4">
            <div className="card shadow h-100">
              <div className="card-body text-center">
                <h3>Enrollments</h3>

                <p>
                  Enroll students into courses and monitor academic progress.
                </p>

                <Link
                  to="/enrollments"
                  className="btn btn-outline-warning"
                >
                  View Enrollments
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* About */}
      <div className="container mb-5">
        <div className="card shadow">
          <div className="card-body">
            <h2>About the System</h2>

            <p>
              The University Course Management System is designed to simplify
              academic administration by providing a secure and user-friendly
              platform for managing students, instructors, courses, and
              enrollments.
            </p>

            <Link to="/about" className="btn btn-primary">
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="container mb-5">
        <div className="row text-center">

          <div className="col-md-3 mb-3">
            <div className="card shadow">
              <div className="card-body">
                <h2>500+</h2>
                <p>Students</p>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <div className="card shadow">
              <div className="card-body">
                <h2>40+</h2>
                <p>Courses</p>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <div className="card shadow">
              <div className="card-body">
                <h2>25+</h2>
                <p>Instructors</p>
              </div>
            </div>
          </div>

          <div className="col-md-3 mb-3">
            <div className="card shadow">
              <div className="card-body">
                <h2>1000+</h2>
                <p>Enrollments</p>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Call to Action */}
      <div className="container text-center mb-5">
        <h2>Start Managing Your University Today</h2>

        <p>
          Register an account or log in to access the dashboard.
        </p>

        <Link to="/register" className="btn btn-success btn-lg">
          Get Started
        </Link>
      </div>

      <Footer />
    </>
  );
}

export default Home;