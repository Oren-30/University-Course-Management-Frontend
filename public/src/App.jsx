import React from "react";

function App() {
  return (
    <div className="container mt-5">

      <div className="card shadow">

        <div className="card-body text-center">

          <h1 className="text-primary">
            University Course Management System
          </h1>

          <p className="lead">
            Welcome to the UCMS platform.
          </p>

          <p>
            Manage students, courses, instructors, and enrollments
            efficiently.
          </p>

          <div className="mt-4">

            <button className="btn btn-primary me-3">
              Login
            </button>

            <button className="btn btn-success">
              Register
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default App;