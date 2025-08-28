import React, { useState, createContext, useContext } from "react";
import { Typography, ToggleButtonGroup, ToggleButton } from "@mui/material";

const ChartsContext = createContext();

export function ChartsProvider({ children }) {
  const [filters, setFilters] = useState({ chartType: "bar" });
  return (
    <ChartsContext.Provider value={{ filters, setFilters }}>
      {children}
    </ChartsContext.Provider>
  );
}

export function ChartsFilter() {
  const { filters, setFilters } = useContext(ChartsContext);
  const handleChange = (e, newType) => {
    if (newType !== null) setFilters({ chartType: newType });
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

export function ChartsContent() {
  const { filters } = useContext(ChartsContext);
  return (
    <>
      <Typography variant="h6">Filtered Chart View</Typography>
      <p>Selected chart: {filters.chartType}</p>
    </>
  );
}

export const Charts = {
  Provider: ChartsProvider,
  Filter: ChartsFilter,
  Content: ChartsContent,
};
