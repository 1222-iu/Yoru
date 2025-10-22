// src/components/ProtectedRoute.jsx (Not needed in main.jsx, but useful for theory)
import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ isAuth }) => {
    // isAuth would normally come from a global state/context (e.g., if a user is logged in)
    return isAuth ? <Outlet /> : <Navigate to="/login" replace />;
};

// You would use it in main.jsx like this:
/*
{
    element: <ProtectedRoute isAuth={false} />, // Check auth state
    children: [
        { path: "admin-dashboard", element: <AdminDashboard /> },
    ]
}
*/