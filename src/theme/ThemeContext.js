import React, { createContext, useMemo, useState, useContext } from "react";
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from "@mui/material/styles";
import { CssBaseline } from "@mui/material";
import { lightThemeOptions, darkThemeOptions } from "./theme";

const ThemeContext = createContext();

export function useAppTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }) {
  const [mode, setMode] = useState(
    () => localStorage.getItem("app-theme") || "light"
  );

  const toggleMode = () => {
    const nextMode = mode === "light" ? "dark" : "light";
    setMode(nextMode);
    localStorage.setItem("app-theme", nextMode);
  };

  const theme = useMemo(() => {
    const themeOptions =
      mode === "light" ? lightThemeOptions : darkThemeOptions;
    return createTheme(themeOptions);
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      <MUIThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </MUIThemeProvider>
    </ThemeContext.Provider>
  );
}
