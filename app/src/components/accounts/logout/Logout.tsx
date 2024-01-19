import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { Navigate } from "react-router-dom";

import ROUTES from "constants/routes";

const Logout: React.FC = () => {
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);

  useEffect(() => {
    removeCookie("token");
  }, []);

  return <Navigate to={ROUTES.default} />;
};

export default Logout;
