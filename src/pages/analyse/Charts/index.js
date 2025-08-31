import React, { createContext, useContext, useState } from "react";
import {
  Box,
  Typography,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material";

const Ctx = createContext(null);

function Provider({ children }) {
  const [filters, setFilters] = useState({ chartType: "bar" });
  return (
    <Ctx.Provider value={{ filters, setFilters }}>{children}</Ctx.Provider>
  );
}

function useCharts() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("Charts must be used within its Provider");
  return ctx;
}

function Filter({ onSubmit }) {
  const { filters, setFilters } = useCharts();
  const handleChange = (_e, newType) => {
    if (newType !== null) {
      setFilters({ ...filters, chartType: newType });
      if (onSubmit) onSubmit();
    }
  };

  return (
    <ToggleButtonGroup
      value={filters.chartType}
      exclusive
      onChange={handleChange}
      fullWidth
      size="small"
      sx={{ mt: 1 }}
    >
      <ToggleButton value="bar">Bar</ToggleButton>
      <ToggleButton value="line">Line</ToggleButton>
      <ToggleButton value="pie">Pie</ToggleButton>
    </ToggleButtonGroup>
  );
}

function Content() {
  const { filters } = useCharts();
  return (
    <>
      <Typography variant="h6">Filtered Content for Charts</Typography>
      <p>Selected chart: {filters.chartType}</p>
    </>
  );
}

export default function Charts({ showFilter, showContent, onSubmit }) {
  if (!showFilter && !showContent) return null;

  return (
    <Provider>
      {showFilter && (
        <Box
          sx={{
            gridArea: "filter",
            p: 2,
            borderRight: (t) => `1px solid ${t.palette.divider}`,
            bgcolor: "background.paper",
            overflowY: "auto",
          }}
        >
          <Filter onSubmit={onSubmit} />
        </Box>
      )}
      {showContent && (
        <Box
          sx={{
            gridArea: "content",
            p: 2,
            overflowY: "auto",
            color: "text.primary",
          }}
        >
          <Content />
        </Box>
      )}
    </Provider>
  );
}
