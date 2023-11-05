import ROUTES from "constants/routes.ts";
import { HomePage, LoginPage } from "src/pages";

import Chat from "components/chat/Chat";
import Signup from "components/accounts/signup/Signup";
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
    component: <LoginPage />,
  },
  {
    path: ROUTES.profile,
    component: <Profile />,
  },
];
