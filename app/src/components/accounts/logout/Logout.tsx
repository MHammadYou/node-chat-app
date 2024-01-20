import { useEffect } from "react";
import { Navigate } from "react-router-dom";

import ROUTES from "constants/routes";
import useCookie from "hooks/useCookie";

const Logout: React.FC = () => {
  const { removeCookie } = useCookie("token");

  useEffect(() => {
    removeCookie();
  }, []);

  return <Navigate to={ROUTES.default} />;
};

export default Logout;
