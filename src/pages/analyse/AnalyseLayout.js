import React from "react";
import { Box, useTheme } from "@mui/material";

function AnalyseLayout({ FilterComponent, children }) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        display: "flex",
        height: "100%",
        backgroundColor: theme.palette.background.default,
      }}
    >
      {/* Left Sidebar with ALL filters */}
      <Box
        sx={{
          width: 280,
          p: 2,
          borderRight: `1px solid ${theme.palette.divider}`,
          backgroundColor: theme.palette.background.paper,
          overflowY: "auto",
        }}
      >
        {FilterComponent}
      </Box>

      {/* Main content */}
      <Box sx={{ flexGrow: 1, p: 2, color: theme.palette.text.primary }}>
        {children}
      </Box>
    </Box>
  );
}

export default AnalyseLayout;
