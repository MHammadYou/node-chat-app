import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import {
  HomePage,
  ChatPage,
  LoginPage,
  SignupPage,
  ProfilePage,
} from "src/pages";
import ROUTES from "constants/routes.ts";

import Root from "./Root";

const RoutesProvider: React.FC = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={ROUTES.default} element={<Root />}>
        <Route index element={<HomePage />} />
        <Route path={ROUTES.chat} element={<ChatPage />} />
        <Route path={ROUTES.login} element={<LoginPage />} />
        <Route path={ROUTES.signup} element={<SignupPage />} />
        <Route path={ROUTES.profile} element={<ProfilePage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default RoutesProvider;
