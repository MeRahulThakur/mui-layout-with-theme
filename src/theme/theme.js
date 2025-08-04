// theme.js
export const lightThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#1976d2", // blue
    },
    secondary: {
      main: "#ff4081", // pink
    },
    background: {
      default: "#f9f9f9",
      paper: "#fff",
    },
    text: {
      primary: "#111",
      secondary: "#555",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
};

export const darkThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9", // light blue
    },
    secondary: {
      main: "#f48fb1", // light pink
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
    text: {
      primary: "#fff",
      secondary: "#bbb",
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
};
