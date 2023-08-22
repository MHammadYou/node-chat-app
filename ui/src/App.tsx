import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import Root from "./Root";
import { ChatPage, HomePage } from "./pages";

const App: React.FC = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<HomePage />} />
        <Route path="/chat" element={<ChatPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
