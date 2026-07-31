import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import api from "../services/api";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Footer from "../components/Footer";

function Dashboard() {

    const navigate = useNavigate();

    const user = JSON.parse(localStorage.getItem("user"));

    const [stats, setStats] = useState({
        students: 0,
        courses: 0,
        instructors: 0,
        enrollments: 0
    });

    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const loadDashboard = async () => {

            try {

                const [
                    students,
                    courses,
                    instructors,
                    enrollments
                ] = await Promise.all([

                    api.get("/students/"),
                    api.get("/courses/"),
                    api.get("/instructors/"),
                    api.get("/enrollments/")

                ]);

                setStats({

                    students:
                        students.data.students.length,

                    courses:
                        courses.data.courses.length,

                    instructors:
                        instructors.data.instructors.length,

                    enrollments:
                        enrollments.data.enrollments.length

                });

            }

            catch (error) {

                console.log(error);

            }

            finally {

                setLoading(false);

            }

        };

        loadDashboard();

    }, []);

    const logout = () => {

        localStorage.removeItem("token");

        localStorage.removeItem("user");

        navigate("/login");

    };

    return (

        <>

            <Navbar />

            <div className="container-fluid">

                <div className="row">

                    <div className="col-md-2 bg-light min-vh-100">

                        <Sidebar />

                    </div>

                    <div className="col-md-10 p-4">

                        <div className="d-flex justify-content-between align-items-center">

                            <div>

                                <h2>

                                    Welcome,

                                    {" "}

                                    {user.first_name}

                                </h2>

                                <p>

                                    Logged in as

                                    {" "}

                                    <strong>

                                        {user.role.toUpperCase()}

                                    </strong>

                                </p>

                            </div>

                            <button

                                className="btn btn-danger"

                                onClick={logout}

                            >

                                Logout

                            </button>

                        </div>

                        <hr />

                        {loading ? (

                            <h4>Loading dashboard...</h4>

                        ) : (

                            <>

                                <div className="row">

                                    <div className="col-md-3 mb-4">

                                        <div className="card shadow text-center">

                                            <div className="card-body">

                                                <h5>Total Students</h5>

                                                <h1>

                                                    {stats.students}

                                                </h1>

                                            </div>

                                        </div>

                                    </div>

                                    <div className="col-md-3 mb-4">

                                        <div className="card shadow text-center">

                                            <div className="card-body">

                                                <h5>Total Courses</h5>

                                                <h1>

                                                    {stats.courses}

                                                </h1>

                                            </div>

                                        </div>

                                    </div>

                                    <div className="col-md-3 mb-4">

                                        <div className="card shadow text-center">

                                            <div className="card-body">

                                                <h5>Instructors</h5>

                                                <h1>

                                                    {stats.instructors}

                                                </h1>

                                            </div>

                                        </div>

                                    </div>

                                    <div className="col-md-3 mb-4">

                                        <div className="card shadow text-center">

                                            <div className="card-body">

                                                <h5>Enrollments</h5>

                                                <h1>

                                                    {stats.enrollments}

                                                </h1>

                                            </div>

                                        </div>

                                    </div>

                                </div>

                                <div className="card shadow mt-4">

                                    <div className="card-body">

                                        <h4>

                                            Quick Navigation

                                        </h4>

                                        <div className="d-flex flex-wrap gap-3 mt-3">

                                            {(user.role === "admin" ||
                                                user.role === "instructor") && (

                                                <Link
                                                    to="/students"
                                                    className="btn btn-primary"
                                                >
                                                    Students
                                                </Link>

                                            )}

                                            <Link
                                                to="/courses"
                                                className="btn btn-success"
                                            >
                                                Courses
                                            </Link>

                                            <Link
                                                to="/instructors"
                                                className="btn btn-warning"
                                            >
                                                Instructors
                                            </Link>

                                            <Link
                                                to="/enrollments"
                                                className="btn btn-info text-white"
                                            >
                                                Enrollments
                                            </Link>

                                            <Link
                                                to="/profile"
                                                className="btn btn-dark"
                                            >
                                                Profile
                                            </Link>

                                        </div>

                                    </div>

                                </div>

                                <div className="card shadow mt-4">

                                    <div className="card-body">

                                        <h4>

                                            Role Permissions

                                        </h4>

                                        <hr />

                                        {user.role === "admin" && (

                                            <ul>

                                                <li>Manage Students</li>

                                                <li>Manage Courses</li>

                                                <li>Manage Instructors</li>

                                                <li>Manage Enrollments</li>

                                                <li>Manage Users</li>

                                            </ul>

                                        )}

                                        {user.role === "instructor" && (

                                            <ul>

                                                <li>View Students</li>

                                                <li>Manage Courses</li>

                                                <li>Update Enrollments</li>

                                                <li>Assign Grades</li>

                                            </ul>

                                        )}

                                        {user.role === "student" && (

                                            <ul>

                                                <li>View Courses</li>

                                                <li>View Enrollments</li>

                                                <li>Update Profile</li>

                                            </ul>

                                        )}

                                    </div>

                                </div>

                            </>

                        )}

                    </div>

                </div>

            </div>

            <Footer />

        </>

    );

}

export default Dashboard;