import React from "react";
import { Box, Typography, Divider, useTheme } from "@mui/material";
import TestDataFilter from "./filters/TestDataFilter";
import StepsFilter from "./filters/StepsFilter";
import ChartsFilter from "./filters/ChartsFilter";

function AnalyseLayout({ filters, children }) {
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
        <Typography variant="subtitle2" gutterBottom>
          Test Data Filters
        </Typography>
        <TestDataFilter {...filters.testData} />

        <Divider sx={{ my: 2 }} />

        <Typography variant="subtitle2" gutterBottom>
          Steps Filters
        </Typography>
        <StepsFilter {...filters.steps} />

        <Divider sx={{ my: 2 }} />

        <Typography variant="subtitle2" gutterBottom>
          Charts Filters
        </Typography>
        <ChartsFilter {...filters.charts} />
      </Box>

      {/* Main content */}
      <Box sx={{ flexGrow: 1, p: 2, color: theme.palette.text.primary }}>
        {children}
      </Box>
    </Box>
  );
}

export default AnalyseLayout;
