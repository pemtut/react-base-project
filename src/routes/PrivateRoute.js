import { Navigate, Outlet } from 'react-router-dom';
function PrivateRoute({ isSignedIn }) {
  return isSignedIn ? <Outlet /> : <Navigate to='/login' replace />;
}

export default PrivateRoute;
