import { Navigate } from "react-router-dom";
import { getUser } from "../auth";

const GuestRoute = ({ children }: {children: React.ReactNode}) => {
  const user = getUser();
  return user.isAuthenticated ? <Navigate to="/" replace /> : children;
};

export default GuestRoute;
