import React from "react";
import { Typography } from "@mui/material";

function TestData({ filters }) {
  return (
    <>
      <Typography variant="h6">Test Data Content</Typography>
      <Typography>Keyword: {filters.keyword}</Typography>
    </>
  );
}

export default TestData;
