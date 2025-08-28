import React, { useState, createContext, useContext } from "react";
import {
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";

const StepsContext = createContext();

export function StepsProvider({ children }) {
  const [filters, setFilters] = useState({ stepType: "" });
  return (
    <StepsContext.Provider value={{ filters, setFilters }}>
      {children}
    </StepsContext.Provider>
  );
}

export function StepsFilter() {
  const { filters, setFilters } = useContext(StepsContext);
  return (
    <FormControl fullWidth margin="normal" size="small">
      <InputLabel>Step Type</InputLabel>
      <Select
        value={filters.stepType}
        onChange={(e) => setFilters({ stepType: e.target.value })}
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="auto">Automatic</MenuItem>
        <MenuItem value="manual">Manual</MenuItem>
      </Select>
    </FormControl>
  );
}

export function StepsContent() {
  const { filters } = useContext(StepsContext);
  return (
    <>
      <Typography variant="h6">Filtered Content for Steps</Typography>
      <p>Step Type: {filters.stepType}</p>
    </>
  );
}

export const Steps = {
  Provider: StepsProvider,
  Filter: StepsFilter,
  Content: StepsContent,
};
