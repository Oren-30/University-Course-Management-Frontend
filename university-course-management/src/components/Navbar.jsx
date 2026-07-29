import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";


function Navbar() {

  const { user, logout } = useAuth();


  return (

    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">

      <div className="container-fluid">

        <Link 
          className="navbar-brand" 
          to="/"
        >
          CMS University
        </Link>


        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >

          <span className="navbar-toggler-icon"></span>

        </button>


        <div 
          className="collapse navbar-collapse"
          id="navbarNav"
        >

          <ul className="navbar-nav ms-auto">


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
                to="/courses"
              >
                Courses
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


            {user ? (

              <li className="nav-item">

                <button
                  className="btn btn-danger ms-2"
                  onClick={logout}
                >
                  Logout
                </button>

              </li>

            ) : (

              <li className="nav-item">

                <Link
                  className="btn btn-light ms-2"
                  to="/login"
                >
                  Login
                </Link>

              </li>

            )}


          </ul>

        </div>

      </div>

    </nav>

  );
}


export default Navbar;
                