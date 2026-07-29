import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-dark text-white mt-5 py-4">
      <div className="container">
        <div className="row">

          {/* About */}
          <div className="col-md-4 mb-3">
            <h5>University Course Management System</h5>

            <p>
              A modern web application built with React and Flask
              for managing students, instructors, courses, and
              enrollments efficiently.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>

            <ul className="list-unstyled">
              <li>
                <Link
                  to="/"
                  className="text-white text-decoration-none"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="text-white text-decoration-none"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/contact"
                  className="text-white text-decoration-none"
                >
                  Contact
                </Link>
              </li>

              <li>
                <Link
                  to="/login"
                  className="text-white text-decoration-none"
                >
                  Login
                </Link>
              </li>

              <li>
                <Link
                  to="/register"
                  className="text-white text-decoration-none"
                >
                  Register
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-4 mb-3">
            <h5>Contact Information</h5>

            <p>Email: info@universitycms.com</p>

            <p>Phone: +254 700 123 456</p>

            <p>Location: Nairobi, Kenya</p>
          </div>

        </div>

<hr className="border-light" />

        <div className="text-center">
          <p className="mb-0">
            © {currentYear} University Course Management System.
            All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;