import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../hooks';

const PublicRoute = () => {
  const { token } = useAuth();

  if (token) {
    return <Navigate to={'/homepage'} replace />;
  }
  return <Outlet />;
};

export default PublicRoute;
