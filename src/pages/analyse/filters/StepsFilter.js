// StepsFilter.js
import React from "react";
import {
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

function StepsFilter({ filters, setFilters }) {
  return (
    <>
      <Typography variant="subtitle1">Steps Filters</Typography>
      <FormControl fullWidth margin="normal" size="small">
        <InputLabel>Step Type</InputLabel>
        <Select
          value={filters.stepType}
          onChange={(e) => setFilters({ ...filters, stepType: e.target.value })}
          label="Step Type"
        >
          <MenuItem value="">All</MenuItem>
          <MenuItem value="auto">Automatic</MenuItem>
          <MenuItem value="manual">Manual</MenuItem>
        </Select>
      </FormControl>
    </>
  );
}

export default StepsFilter;
