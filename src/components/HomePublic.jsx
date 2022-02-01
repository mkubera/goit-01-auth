import React from "react";
import { Navigate } from "react-router-dom";
const HomePublic = () => {
  const location = "/"; // TODO?
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default HomePublic;
