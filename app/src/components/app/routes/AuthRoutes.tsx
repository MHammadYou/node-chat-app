import { Navigate, Outlet } from "react-router-dom";

import ROUTES from "constants/routes";
import useAuth from "hooks/useAuth";

const AuthRoutes: React.FC = () => {
  const isUserAuthenticated = useAuth();

  return !isUserAuthenticated ? <Outlet /> : <Navigate to={ROUTES.default} />;
};

export default AuthRoutes;
