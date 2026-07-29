import React from "react";
import { Link } from "react-router-dom";

function Sidebar() {

  return (
    <div className="p-3">

      <h5 className="mb-4">
        CMS University
      </h5>

      <ul className="nav flex-column">

        <li className="nav-item">
          <Link 
            className="nav-link"
            to="/dashboard"
          >
            Dashboard
          </Link>
        </li>


        <li className="nav-item">
          <Link 
            className="nav-link"
            to="/students"
          >
            Students
          </Link>
        </li>


        <li className="nav-item">
          <Link 
            className="nav-link"
            to="/courses"
          >
            Courses
          </Link>
        </li>


        <li className="nav-item">
          <Link 
            className="nav-link"
            to="/instructors"
          >
            Instructors
          </Link>
        </li>


        <li className="nav-item">
          <Link 
            className="nav-link"
            to="/enrollments"
          >
            Enrollments
          </Link>
        </li>

      </ul>

    </div>
  );
}


export default Sidebar;