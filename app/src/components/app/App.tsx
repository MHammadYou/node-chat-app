import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie";

import store from "store/";
import ThemeProvider from "theme/ThemeProvider";
import ToastProvider from "contexts/ToastProvider";

import RoutesProvider from "./routes";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <CookiesProvider defaultSetOptions={{ path: "/" }}>
        <ThemeProvider>
          <ToastProvider />
          <RoutesProvider />
        </ThemeProvider>
      </CookiesProvider>
    </Provider>
  );
};

export default App;
