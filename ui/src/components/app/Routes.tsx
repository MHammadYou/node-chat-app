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

import Root from "./Root";

const Routes: React.FC = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<HomePage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default Routes;
