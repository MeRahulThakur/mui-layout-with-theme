// Steps.js
import React, { useState } from "react";
import AnalyseLayout from "./AnalyseLayout";
import StepsFilter from "./filters/StepsFilter";
import { Typography } from "@mui/material";

function Steps() {
  const [filters, setFilters] = useState({ stepType: "" });

  return (
    <AnalyseLayout
      FilterComponent={() => (
        <StepsFilter filters={filters} setFilters={setFilters} />
      )}
    >
      <Typography variant="h6">Filtered Content for Steps</Typography>
      <p>Step Type: {filters.stepType}</p>
    </AnalyseLayout>
  );
}

export default Steps;
