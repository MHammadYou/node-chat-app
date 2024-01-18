import { Navigate, Outlet } from "react-router-dom";
import { useCookies } from "react-cookie";

import ROUTES from "constants/routes";

const PrivateRoute: React.FC = () => {
  const [{ token }] = useCookies(["token"]);

  return token ? <Outlet /> : <Navigate to={ROUTES.login} />;
};

export default PrivateRoute;
