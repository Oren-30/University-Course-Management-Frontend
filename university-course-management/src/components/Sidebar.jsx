import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {

  const user = JSON.parse(localStorage.getItem("user"));

  return (

    <div className="bg-light border-end vh-100 p-3">

      <h4 className="mb-4">
        Menu
      </h4>

      <ul className="nav flex-column">

        <li className="nav-item mb-2">
          <Link
            to="/dashboard"
            className="nav-link"
          >
            Dashboard
          </Link>
        </li>

        {(user?.role === "admin" ||
          user?.role === "instructor") && (

          <li className="nav-item mb-2">
            <Link
              to="/students"
              className="nav-link"
            >
              Students
            </Link>
          </li>

        )}

        <li className="nav-item mb-2">
          <Link
            to="/courses"
            className="nav-link"
          >
            Courses
          </Link>
        </li>

        <li className="nav-item mb-2">
          <Link
            to="/instructors"
            className="nav-link"
          >
            Instructors
          </Link>
        </li>

        <li className="nav-item mb-2">
          <Link
            to="/enrollments"
            className="nav-link"
          >
            Enrollments
          </Link>
        </li>

        <li className="nav-item mb-2">
          <Link
            to="/profile"
            className="nav-link"
          >
            My Profile
          </Link>
        </li>

      </ul>

    </div>

  );
}

export default Sidebar;