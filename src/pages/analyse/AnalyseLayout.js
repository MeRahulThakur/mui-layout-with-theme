import React from "react";
import { Box } from "@mui/material";

function AnalyseLayout({ FilterComponent, children }) {
  return (
    <Box sx={{ display: "flex", mt: 2 }}>
      {/* Left Sidebar */}
      <Box sx={{ width: 250, pr: 2, borderRight: "1px solid #ccc" }}>
        {FilterComponent && <FilterComponent />}
      </Box>

      {/* Right Content */}
      <Box sx={{ flexGrow: 1, pl: 2 }}>{children}</Box>
    </Box>
  );
}

export default AnalyseLayout;
