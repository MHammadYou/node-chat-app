import { Provider } from "react-redux";

import store from "store/";
import ThemeProvider from "theme/ThemeProvider";

import Routes from "./Routes";

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider>
        <Routes />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
