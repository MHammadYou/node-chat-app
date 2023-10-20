import { Provider } from "react-redux";

import store from "store/";
import ThemeProvider from "theme/ThemeProvider";

import RoutesProvider from "./RoutesProvider";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <RoutesProvider />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
