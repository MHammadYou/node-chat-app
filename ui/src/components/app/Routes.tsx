import ROUTES from "constants/routes.ts";
import { HomePage, LoginPage, ProfilePage, SignupPage } from "src/pages";

import Chat from "components/chat/Chat";

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
    component: <SignupPage />,
  },
  {
    path: ROUTES.login,
    component: <LoginPage />,
  },
  {
    path: ROUTES.profile,
    component: <ProfilePage />,
  },
];
