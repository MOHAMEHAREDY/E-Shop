import { useLocation, Navigate } from "react-router-dom";

const AuthCheck = ({ children }) => {
  const isAuthenticate = localStorage.getItem("isAuthenticated") === "true";
  const location = useLocation();

  if (!isAuthenticate) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return children;
};

export default AuthCheck;
