import { useContext } from "react";
import PropTypes from "prop-types";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoutes = ({ children }) => {
  const location = useLocation();

  const { user, loading } = useContext(AuthContext);
  if (loading) {
    return <h1>Loading...</h1>;
  } else if (!user) {
    return <Navigate state={location.pathname} to="/login"></Navigate>;
  } else {
    return children;
  }
};
PrivateRoutes.propTypes = {
  children: PropTypes.node,
};
export default PrivateRoutes;
