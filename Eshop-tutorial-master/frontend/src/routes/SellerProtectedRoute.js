// Use named imports for React Router components
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import Loader from '../components/Layout/Loader';

// Use a custom hook to get the seller state
const useSeller = () => {
  const { isLoading, isSeller } = useSelector((state) => state.seller);
  return { isLoading, isSeller };
};

// Use a wrapper component to render the children or redirect
const SellerProtectedRoute = ({ children }) => {
  const { isLoading, isSeller } = useSeller();
  if (isLoading) {
    return <Loader />;
  }
  if (!isSeller) {
    return <Navigate to='/shop-login' replace />;
  }
  return children;
  //   return <Outlet />;
};

export default SellerProtectedRoute;


/* older code is down */

// import { useSelector } from "react-redux";
// import { Navigate } from "react-router-dom";
// import Loader from "../components/Layout/Loader";

// const SellerProtectedRoute = ({ children }) => {
//   const { isLoading, isSeller } = useSelector((state) => state.seller);
//   if (isLoading === true) {
//     return <Loader />;
//   } else {
//     if (!isSeller) {
//       return <Navigate to={`/shop-login`} replace />;
//     }
//     return children;
//   }
// };

// export default SellerProtectedRoute;
