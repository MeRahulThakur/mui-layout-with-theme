import React from "react";
import { TextField } from "@mui/material";

function TestDataFilter({ filters, setFilters }) {
  return (
    <TextField
      fullWidth
      label="Keyword"
      variant="outlined"
      size="small"
      margin="dense"
      value={filters.keyword}
      onChange={(e) => setFilters({ ...filters, keyword: e.target.value })}
    />
  );
}

export default TestDataFilter;
