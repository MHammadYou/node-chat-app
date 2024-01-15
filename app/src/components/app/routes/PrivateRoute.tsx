import { useState } from "react";
import { Navigate } from "react-router-dom";

import ROUTES from "constants/routes";

type Props = {
  Component: React.ReactNode;
};

const PrivateRoute: React.FC<Props> = ({ Component }) => {
  const [isUserAuthenticated, setIsUserAuthenticated] = useState(false);

  return isUserAuthenticated ? Component : <Navigate to={ROUTES.login} />;
};

export default PrivateRoute;
