import React, { useState, useMemo, createContext } from "react";
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  PaletteMode,
} from "@mui/material";

import { getColorPalette } from "./theme";

export const ToggleThemeContext = createContext(() => {});

type Props = {
  children: React.ReactNode;
};

const Theme: React.FC<Props> = ({ children }) => {
  const [activeTheme, setActiveTheme] = useState<PaletteMode>("light");

  const theme = useMemo(
    () =>
      createTheme({
        ...getColorPalette(activeTheme),
      }),
    [activeTheme]
  );

  const toggleTheme = () => {
    setActiveTheme(activeTheme === "light" ? "dark" : "light");
  };

  return (
    <ThemeProvider theme={theme}>
      <ToggleThemeContext.Provider value={toggleTheme}>
        <CssBaseline>{children}</CssBaseline>
      </ToggleThemeContext.Provider>
    </ThemeProvider>
  );
};

export default Theme;
