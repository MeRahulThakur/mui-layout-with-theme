import React, { useState } from "react";
import AnalyseLayout from "./AnalyseLayout";
import ChartsFilter from "./filters/ChartsFilter";
import { Typography } from "@mui/material";

function Charts({ filters, setFilters }) {
  return (
    <AnalyseLayout
      FilterComponent={
        <ChartsFilter filters={filters} setFilters={setFilters} />
      }
    >
      <Typography variant="h6">Filtered Chart View</Typography>
      <p>Selected chart: {filters.chartType}</p>
    </AnalyseLayout>
  );
}

export default Charts;
