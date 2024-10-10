import React from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps {
  roleRequired?: string;
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ roleRequired, children }) => {
  // Get the user's role from localStorage (or sessionStorage)
  const token = localStorage.getItem('token')
  const userRole = localStorage.getItem('role');
  // If no userRole or role doesn't match, redirect to unauthorized

  if (token && !userRole) {
    return <Navigate to="/login" />;
  }

  if (userRole !== roleRequired) {
    return <Navigate to="/" />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
