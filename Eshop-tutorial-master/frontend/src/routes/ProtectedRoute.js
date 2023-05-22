// Use named imports for React Router components
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

// Use a custom hook to get the user state
const useUser = () => {
  const { loading, isAuthenticated } = useSelector((state) => state.user);
  return { loading, isAuthenticated };
};

// Use a wrapper component to render the children or redirect
const ProtectedRoute = ({ children }) => {
  const { loading, isAuthenticated } = useUser();
  if (loading) {
    return null; // or some loading indicator
  }
  if (!isAuthenticated) {
    return <Navigate to='/login' replace />;
  }
  return children;
  //   return <Outlet />;
};

export default ProtectedRoute;

/* Older code is down */

// import { useSelector } from 'react-redux';
// import { Navigate } from 'react-router-dom';

// const ProtectedRoute = ({ children }) => {
//   const { loading, isAuthenticated } = useSelector((state) => state.user);
//   if (loading === false) {
//     if (!isAuthenticated) {
//       return <Navigate to='/login' replace />;
//     }
//     return children;
//   }
// };
// export default ProtectedRoute;
