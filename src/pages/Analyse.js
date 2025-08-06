import React, { useState } from "react";
import {
  Routes,
  Route,
  useNavigate,
  useLocation,
  Navigate,
} from "react-router-dom";
import { Tabs, Tab, Box } from "@mui/material";
import TestData from "./analyse/TestData";
import Steps from "./analyse/Steps";
import Charts from "./analyse/Charts";

function Analyse() {
  const navigate = useNavigate();
  const location = useLocation();

  const tabMap = ["/analyse/test-data", "/analyse/steps", "/analyse/charts"];
  function getCurrentTabValue(pathname) {
    const index = tabMap.findIndex((path) => pathname.startsWith(path));
    return index === -1 ? 0 : index;
  }

  const tabValue = getCurrentTabValue(location.pathname);

  const handleTabChange = (event, newValue) => {
    navigate(tabMap[newValue]);
  };

  return (
    <Box sx={{ p: 2, height: "100%" }}>
      <Tabs value={tabValue} onChange={handleTabChange}>
        <Tab label="Test Data" />
        <Tab label="Steps" />
        <Tab label="Charts" />
      </Tabs>

      <Routes>
        <Route path="test-data" element={<TestData />} />
        <Route path="steps" element={<Steps />} />
        <Route path="charts" element={<Charts />} />
        <Route path="/" element={<TestData />} />
        <Route path="*" element={<Navigate to="/analyse/test-data" />} />{" "}
        {/* Catch-all */}
      </Routes>
    </Box>
  );
}

export default Analyse;
