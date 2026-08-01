import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import api from "../services/api";

function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    role: "student",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);


  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };


  const handleSubmit = async (e) => {

    e.preventDefault();

    setError("");
    setSuccess("");


    if (formData.password !== formData.confirmPassword) {

      setError("Passwords do not match.");
      return;

    }


    setLoading(true);


    try {

      const response = await api.post("/register", {

        first_name: formData.first_name,
        last_name: formData.last_name,
        email: formData.email,
        password: formData.password,
        role: formData.role,

      });


      setSuccess(response.data.message);


      setTimeout(() => {

        navigate("/login");

      }, 2000);


    } catch (err) {

      console.error(err);


      if (err.response) {

        setError(
          err.response.data.message ||
          "Registration failed."
        );

      } else {

        setError(
          "Unable to connect to the server."
        );

      }

    }


    setLoading(false);

  };


  return (
    <>
      <Navbar />

      <div className="container mt-5 mb-5">

        <div className="row justify-content-center">

          <div className="col-md-6">

            <div className="card shadow">

              <div className="card-body">


                <h2 className="text-center mb-4">
                  Register
                </h2>


                {error && (
                  <div className="alert alert-danger">
                    {error}
                  </div>
                )}


                {success && (
                  <div className="alert alert-success">
                    {success}
                  </div>
                )}


                <form onSubmit={handleSubmit}>


                  <div className="mb-3">
                    <label>First Name</label>

                    <input
                      type="text"
                      className="form-control"
                      name="first_name"
                      value={formData.first_name}
                      onChange={handleChange}
                      required
                    />

                  </div>


                  <div className="mb-3">
                    <label>Last Name</label>

                    <input
                      type="text"
                      className="form-control"
                      name="last_name"
                      value={formData.last_name}
                      onChange={handleChange}
                      required
                    />

                  </div>


                  <div className="mb-3">
                    <label>Email</label>

                    <input
                      type="email"
                      className="form-control"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />

                  </div>


                  <div className="mb-3">

                    <label>Role</label>

                    <select
                      className="form-select"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                    >

                      <option value="student">
                        Student
                      </option>

                      <option value="instructor">
                        Instructor
                      </option>

                      <option value="admin">
                        Administrator
                      </option>

                    </select>

                  </div>


                  <div className="mb-3">

                    <label>Password</label>

                    <input
                      type="password"
                      className="form-control"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />

                  </div>


                  <div className="mb-4">

                    <label>
                      Confirm Password
                    </label>

                    <input
                      type="password"
                      className="form-control"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      required
                    />

                  </div>


                  <button
                    type="submit"
                    className="btn btn-success w-100"
                    disabled={loading}
                  >

                    {loading
                      ? "Creating Account..."
                      : "Register"
                    }

                  </button>


                </form>


                <div className="text-center mt-3">

                  Already have an account?{" "}

                  <Link to="/login">
                    Login
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


export default Register;