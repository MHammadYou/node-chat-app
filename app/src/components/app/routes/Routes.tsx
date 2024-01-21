import ROUTES from "constants/routes.ts";

import Home from "components/app/Home";
import Chat from "components/chat";
import Signup from "components/accounts/signup";
import Login from "components/accounts/login";
import Logout from "components/accounts/logout";
import Profile from "components/profile";

type RouteInfo = {
  path: string;
  component: React.ReactElement;
};

export const authRoutes: RouteInfo[] = [
  {
    path: ROUTES.signup,
    component: <Signup />,
  },
  {
    path: ROUTES.login,
    component: <Login />,
  },
];

export const privateRoutes: RouteInfo[] = [
  {
    path: ROUTES.default,
    component: <Home />,
  },
  {
    path: ROUTES.logout,
    component: <Logout />,
  },
  {
    path: ROUTES.chat,
    component: <Chat />,
  },
  {
    path: ROUTES.profile,
    component: <Profile />,
  },
];
