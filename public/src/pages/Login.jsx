import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import api from "../services/api";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Login() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Handle input changes
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle login form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await api.post("/login", formData);

      // Save JWT token
      localStorage.setItem("token", response.data.access_token);

      // Save logged-in user (optional)
      localStorage.setItem("user", JSON.stringify(response.data.user));

      alert("Login successful!");

      navigate("/dashboard");
    } catch (err) {
      if (err.response) {
        setError(err.response.data.message || "Invalid email or password.");
      } else {
        setError("Unable to connect to the server.");
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
                  University Course Management System
                </h2>

                <h4 className="text-center mb-4">
                  Login
                </h4>

                {error && (
                  <div className="alert alert-danger">
                    {error}
                  </div>
                )}

                <form onSubmit={handleSubmit}>

                  <div className="mb-3">
                    <label className="form-label">
                      Email Address
                    </label>

                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">
                      Password
                    </label>

                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary w-100"
                    disabled={loading}
                  >
                    {loading ? "Logging in..." : "Login"}
                  </button>

                </form>

                <div className="text-center mt-3">
                  <Link to="/forgot-password">
                    Forgot Password?
                  </Link>
                </div>

                <div className="text-center mt-2">
                  Don't have an account?{" "}
                  <Link to="/register">
                    Register
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

export default Login;