import ROUTES from "constants/routes.ts";
import { HomePage } from "src/pages";

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
    path: ROUTES.default,
    component: <HomePage />,
  },
  {
    path: ROUTES.chat,
    component: <Chat />,
  },
  {
    path: ROUTES.signup,
    component: <Signup />,
  },
  {
    path: ROUTES.login,
    component: <Login />,
  },
  {
    path: ROUTES.profile,
    component: <Profile />,
  },
];
