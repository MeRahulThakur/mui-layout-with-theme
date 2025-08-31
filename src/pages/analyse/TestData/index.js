import React, { createContext, useContext, useState } from "react";
import { Box, TextField, Typography } from "@mui/material";

const Ctx = createContext(null);

function Provider({ children }) {
  const [filters, setFilters] = useState({ keyword: "" });
  const value = { filters, setFilters };
  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

function useTestData() {
  const ctx = useContext(Ctx);
  if (!ctx) throw new Error("TestData must be used within its Provider");
  return ctx;
}

function Filter({ onSubmit }) {
  const { filters, setFilters } = useTestData();
  return (
    <TextField
      fullWidth
      label="Keyword"
      variant="outlined"
      size="small"
      margin="dense"
      value={filters.keyword}
      onChange={(e) => {
        setFilters({ ...filters, keyword: e.target.value });
        if (onSubmit) onSubmit();
      }}
    />
  );
}

function Content() {
  const { filters } = useTestData();
  return (
    <>
      <Typography variant="h6">Filtered Content for Test Data</Typography>
      <p>Keyword filter: {filters.keyword}</p>
    </>
  );
}

/**
 * Default export: one component that knows how to render itself
 * into the Analyse layout slots using grid areas.
 */
export default function TestData({ showFilter, showContent, onSubmit }) {
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
