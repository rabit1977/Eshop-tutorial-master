// Use named imports for React Router components
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

// Use a custom hook to get the user state
const useUser = () => {
  const { loading, isAuthenticated, user } = useSelector((state) => state.user);
  return { loading, isAuthenticated, user };
};

// Use a wrapper component to render the children or redirect
const ProtectedAdminRoute = ({ children }) => {
  const { loading, isAuthenticated, user } = useUser();
  if (loading) {
    return null; // or some loading indicator
  }
  if (!isAuthenticated) {
    return <Navigate to='/login' replace />;
  }
  if (user.role !== 'Admin') {
    return <Navigate to='/' replace />;
  }
  return children;
  //   return <Outlet />;
};

export default ProtectedAdminRoute;

/* Older code is down */

// import { useSelector } from "react-redux";
// import { Navigate } from "react-router-dom";

// const ProtectedAdminRoute = ({ children }) => {
//   const { loading, isAuthenticated,user } = useSelector((state) => state.user);
//   if (loading === false) {
//     if (!isAuthenticated) {
//       return <Navigate to="/login" replace />;
//     } else if(user.role !== "Admin"){
//         return <Navigate to="/" replace />;
//     }
//     return children;
//   }
// };

// export default ProtectedAdminRoute;
