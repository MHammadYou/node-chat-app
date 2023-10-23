import ROUTES from "constants/routes";
import {
  ChatPage,
  HomePage,
  LoginPage,
  ProfilePage,
  SignupPage,
} from "src/pages";

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
    component: <ChatPage />,
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
