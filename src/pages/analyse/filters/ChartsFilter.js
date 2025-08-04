// ChartsFilter.js
import React from "react";
import { Typography, ToggleButtonGroup, ToggleButton } from "@mui/material";

function ChartsFilter({ filters, setFilters }) {
  const handleChange = (e, newType) => {
    if (newType !== null) {
      setFilters({ ...filters, chartType: newType });
    }
  };

  return (
    <>
      <Typography variant="subtitle1">Chart Type</Typography>
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
    </>
  );
}

export default ChartsFilter;
