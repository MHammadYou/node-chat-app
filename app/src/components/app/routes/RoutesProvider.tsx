import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Root from "./Root";
import NotFound from "./NotFound";
import { privateRoutes, authRoutes } from "./Routes";
import PrivateRoutes from "./PrivateRoutes";
import AuthRoutes from "./AuthRoutes";

const RoutesProvider: React.FC = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route element={<AuthRoutes />}>
          {authRoutes.map(({ path, component }) => (
            <Route path={path} element={component} key={path} />
          ))}
        </Route>

        <Route element={<PrivateRoutes />}>
          {privateRoutes.map(({ path, component }) => (
            <Route path={path} element={component} key={path} />
          ))}
        </Route>
        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default RoutesProvider;
