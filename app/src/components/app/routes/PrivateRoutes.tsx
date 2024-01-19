import { Navigate, Outlet } from "react-router-dom";

import ROUTES from "constants/routes";
import useAuth from "hooks/useAuth";

const PrivateRoute: React.FC = () => {
  const isUserAuthenticated = useAuth();

  return isUserAuthenticated ? <Outlet /> : <Navigate to={ROUTES.login} />;
};

export default PrivateRoute;
