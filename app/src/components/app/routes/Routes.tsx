import ROUTES from "constants/routes.ts";

import Home from "components/app/Home";
import Chat from "components/chat/Chat";
import Signup from "components/accounts/signup/Signup";
import Login from "components/accounts/login/Login";
import Profile from "components/profile/Profile";

type RouteInfo = {
  path: string;
  component: React.ReactElement;
};

export const routes: RouteInfo[] = [
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
    path: ROUTES.chat,
    component: <Chat />,
  },
  {
    path: ROUTES.profile,
    component: <Profile />,
  },
];
