import React from "react";

import {
    BrowserRouter,
    Routes,
    Route
} from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import Students from "./pages/Students";
import Courses from "./pages/Courses";
import Instructors from "./pages/Instructors";
import Enrollments from "./pages/Enrollments";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

import ProtectedRoute from "./components/ProtectedRoute";


function App() {

    return (

        <BrowserRouter>

            <Routes>

                {/* Public Routes */}

                <Route
                    path="/"
                    element={<Home />}
                />

                <Route
                    path="/login"
                    element={<Login />}
                />

                <Route
                    path="/register"
                    element={<Register />}
                />

                <Route
                    path="/about"
                    element={<About />}
                />

                <Route
                    path="/contact"
                    element={<Contact />}
                />



                {/* Dashboard */}

                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute>
                            <Dashboard />
                        </ProtectedRoute>
                    }
                />



                {/* Students */}

                <Route
                    path="/students"
                    element={
                        <ProtectedRoute
                            roles={[
                                "admin",
                                "instructor"
                            ]}
                        >
                            <Students />
                        </ProtectedRoute>
                    }
                />



                {/* Courses */}

                <Route
                    path="/courses"
                    element={
                        <ProtectedRoute
                            roles={[
                                "admin",
                                "instructor",
                                "student"
                            ]}
                        >
                            <Courses />
                        </ProtectedRoute>
                    }
                />



                {/* Instructors */}

                <Route
                    path="/instructors"
                    element={
                        <ProtectedRoute
                            roles={[
                                "admin",
                                "instructor",
                                "student"
                            ]}
                        >
                            <Instructors />
                        </ProtectedRoute>
                    }
                />



                {/* Enrollments */}

                <Route
                    path="/enrollments"
                    element={
                        <ProtectedRoute
                            roles={[
                                "admin",
                                "instructor",
                                "student"
                            ]}
                        >
                            <Enrollments />
                        </ProtectedRoute>
                    }
                />



                {/* Profile */}

                <Route
                    path="/profile"
                    element={
                        <ProtectedRoute>
                            <Profile />
                        </ProtectedRoute>
                    }
                />



                {/* Catch All */}

                <Route
                    path="*"
                    element={<NotFound />}
                />

            </Routes>

        </BrowserRouter>

    );

}

export default App;