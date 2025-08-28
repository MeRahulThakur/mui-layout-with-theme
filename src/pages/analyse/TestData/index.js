import React, { useState, createContext, useContext } from "react";
import { Typography, TextField } from "@mui/material";

// Context for filters internal to TestData
const TestDataContext = createContext();

export function TestDataProvider({ children }) {
  const [filters, setFilters] = useState({ keyword: "" });
  return (
    <TestDataContext.Provider value={{ filters, setFilters }}>
      {children}
    </TestDataContext.Provider>
  );
}

export function TestDataFilter() {
  const { filters, setFilters } = useContext(TestDataContext);
  return (
    <TextField
      fullWidth
      label="Keyword"
      variant="outlined"
      size="small"
      margin="dense"
      value={filters.keyword}
      onChange={(e) => setFilters({ keyword: e.target.value })}
    />
  );
}

export function TestDataContent() {
  const { filters } = useContext(TestDataContext);
  return (
    <>
      <Typography variant="h6">Filtered Content for Test Data</Typography>
      <p>Keyword filter: {filters.keyword}</p>
    </>
  );
}

// Bundle for Analyse
export const TestData = {
  Provider: TestDataProvider,
  Filter: TestDataFilter,
  Content: TestDataContent,
};
