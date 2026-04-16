import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const adminInfo = localStorage.getItem('adminInfo');
  const token = localStorage.getItem('adminToken');

  if (!adminInfo || !token) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
};

export default ProtectedRoute;