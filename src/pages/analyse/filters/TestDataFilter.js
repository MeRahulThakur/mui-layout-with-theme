import React from "react";
import { TextField, Typography } from "@mui/material";

function TestDataFilter({ filters, setFilters }) {
  return (
    <div>
      <Typography variant="subtitle1">Test Data Filters</Typography>
      <TextField
        fullWidth
        label="Keyword"
        variant="outlined"
        size="small"
        margin="normal"
        value={filters.keyword}
        onChange={(e) => setFilters({ ...filters, keyword: e.target.value })}
      />
    </div>
  );
}

export default TestDataFilter;
