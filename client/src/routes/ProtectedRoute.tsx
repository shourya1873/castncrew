import { Navigate } from "react-router-dom";
import { getUser } from "../auth";

const ProtectedRoute = ({ children, allowedRoles }: {children: React.ReactNode, allowedRoles: []}) => {
  const user = getUser();

  if (!user.isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
