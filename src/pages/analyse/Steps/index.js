import React, { createContext, useContext, useState } from "react";
import {
  Box,
  Typography,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

const Ctx = createContext(null);

function Provider({ children }) {
  const [filters, setFilters] = useState({ stepType: "" });
  return (
    <Ctx.Provider value={{ filters, setFilters }}>{children}</Ctx.Provider>
  );
}

function useSteps() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("Steps must be used within its Provider");
  return ctx;
}

function Filter({ onSubmit }) {
  const { filters, setFilters } = useSteps();
  return (
    <FormControl fullWidth margin="normal" size="small">
      <InputLabel>Step Type</InputLabel>
      <Select
        label="Step Type"
        value={filters.stepType}
        onChange={(e) => {
          setFilters({ ...filters, stepType: e.target.value });
          if (onSubmit) onSubmit();
        }}
      >
        <MenuItem value="">All</MenuItem>
        <MenuItem value="auto">Automatic</MenuItem>
        <MenuItem value="manual">Manual</MenuItem>
      </Select>
    </FormControl>
  );
}

function Content() {
  const { filters } = useSteps();
  return (
    <>
      <Typography variant="h6">Filtered Content for Steps</Typography>
      <p>Step Type: {filters.stepType || "All"}</p>
    </>
  );
}

export default function Steps({ showFilter, showContent, onSubmit }) {
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
