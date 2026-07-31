import React, { useState, useEffect } from "react";
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

  // Redirect if already logged in
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      navigate("/dashboard");
    }
  }, [navigate]);

  // Handle form input
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Login
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setError("");

    try {
      const response = await api.post("/auth/login", formData);

      console.log("Login Response:", response.data);

      // Save JWT token
      localStorage.setItem(
        "token",
        response.data.access_token
      );

      // Save user
      localStorage.setItem(
        "user",
        JSON.stringify(response.data.user)
      );

      alert("Login successful!");

      navigate("/dashboard");

    } catch (err) {

      console.error("Login Error:", err);

      if (err.response) {

        console.log("Status:", err.response.status);
        console.log("Response:", err.response.data);

        setError(
          err.response.data.message ||
          "Invalid email or password."
        );

      } else if (err.request) {

        console.log("No response received.");

        setError(
          "Cannot connect to the Flask server."
        );

      } else {

        console.log(err.message);

        setError(err.message);

      }

    } finally {

      setLoading(false);

    }
  };

  return (
    <>
      <Navbar />

      <div className="container mt-5">

        <div className="row justify-content-center">

          <div className="col-md-5">

            <div className="card shadow">

              <div className="card-body">

                <h2 className="text-center mb-3">
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

                  <button
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