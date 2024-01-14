import { Provider } from "react-redux";

import store from "store/";
import ThemeProvider from "theme/ThemeProvider";
import ToastProvider from "contexts/ToastProvider";

import RoutesProvider from "./routes";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <ToastProvider />
        <RoutesProvider />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
