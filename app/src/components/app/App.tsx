import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie";

import store from "store/";
import ThemeProvider from "theme/ThemeProvider";
import ToastProvider from "contexts/ToastProvider";
import ErrorBoundaryProvider from "components/errors/ErrorBoundaryProvider";

import RoutesProvider from "./routes";

const App: React.FC = () => {
  return (
    <ErrorBoundaryProvider>
      <Provider store={store}>
        <CookiesProvider defaultSetOptions={{ path: "/" }}>
          <ThemeProvider>
            <ToastProvider />
            <RoutesProvider />
          </ThemeProvider>
        </CookiesProvider>
      </Provider>
    </ErrorBoundaryProvider>
  );
};

export default App;
