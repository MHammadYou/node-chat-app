import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import Root from "./Root";
import NotFound from "./NotFound";
import { routes } from "./Routes";

const RoutesProvider: React.FC = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        {routes.map(({ path, component }) => (
          <Route path={path} element={component} key={path} />
        ))}

        <Route path="*" element={<NotFound />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default RoutesProvider;
