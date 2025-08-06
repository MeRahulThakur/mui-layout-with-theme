import React, { useState } from "react";
import { Typography } from "@mui/material";

function TestData({ filters, setFilters }) {
  return (
    <>
      <Typography variant="h6">Filtered Content for Test Data</Typography>
      <p>Keyword filter: {filters.keyword}</p>
    </>
  );
}

export default TestData;
