// Charts.js
import React, { useState } from "react";
import { Typography } from "@mui/material";

function Charts({ filters }) {
  return (
    <>
      <Typography variant="h6">Filtered Chart View</Typography>
      <p>Selected chart: {filters.chartType}</p>
    </>
  );
}

export default Charts;
