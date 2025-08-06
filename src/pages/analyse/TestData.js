import React, { useState } from "react";
import AnalyseLayout from "./AnalyseLayout";
import TestDataFilter from "./filters/TestDataFilter";
import { Typography } from "@mui/material";

function TestData({ filters, setFilters }) {
  return (
    <AnalyseLayout
      FilterComponent={
        <TestDataFilter filters={filters} setFilters={setFilters} />
      }
    >
      <Typography variant="h6">Filtered Content for Test Data</Typography>
      <p>Keyword filter: {filters.keyword}</p>
    </AnalyseLayout>
  );
}

export default TestData;
