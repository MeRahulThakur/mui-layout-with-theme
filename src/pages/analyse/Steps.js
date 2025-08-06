import React, { useState } from "react";
import AnalyseLayout from "./AnalyseLayout";
import StepsFilter from "./filters/StepsFilter";
import { Typography } from "@mui/material";

function Steps({ filters, setFilters }) {
  return (
    <AnalyseLayout
      FilterComponent={
        <StepsFilter filters={filters} setFilters={setFilters} />
      }
    >
      <Typography variant="h6">Filtered Content for Steps</Typography>
      <p>Step Type: {filters.stepType}</p>
    </AnalyseLayout>
  );
}

export default Steps;
