import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import ROUTES from "constants/routes.ts";

import Root from "./Root";
import { routes } from "./Routes";

const RoutesProvider: React.FC = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={ROUTES.default} element={<Root />}>
        {routes.map(({ path, component }) => (
          <Route path={path} element={component} />
        ))}
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default RoutesProvider;
