import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks';

const PrivateRoute = () => {
  const { token } = useAuth();
  if (token) {
    return <Outlet />;
  }
  return <Navigate to={'/login'} replace />;
};

export default PrivateRoute;
