import React from "react";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, roles = [] }) {

    // Get token and logged-in user
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));

    // User is not logged in
    if (!token || !user) {
        return <Navigate to="/login" replace />;
    }

    // Role-based authorization
    if (
        roles.length > 0 &&
        !roles.includes(user.role)
    ) {
        return <Navigate to="/dashboard" replace />;
    }

    // Authorized
    return children;
}

export default ProtectedRoute;