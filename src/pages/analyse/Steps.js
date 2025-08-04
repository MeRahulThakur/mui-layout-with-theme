// Steps.js
import React, { useState } from "react";
import { Typography } from "@mui/material";

function Steps({ filters }) {
  return (
    <>
      <Typography variant="h6">Filtered Content for Steps</Typography>
      <p>Step Type: {filters.stepType}</p>
    </>
  );
}

export default Steps;
