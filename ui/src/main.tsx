import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import store from "store/";

import ThemeProvider from "theme/ThemeProvider";
import App from "components/app";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
