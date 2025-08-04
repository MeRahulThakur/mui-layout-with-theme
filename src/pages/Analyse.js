import React from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import { Tabs, Tab, Box } from "@mui/material";
import TestData from "./analyse/TestData";
import Steps from "./analyse/Steps";
import Charts from "./analyse/Charts";

const tabMap = ["/analyse/test-data", "/analyse/steps", "/analyse/charts"];

function Analyse() {
  const navigate = useNavigate();
  const location = useLocation();

  const tabValue = tabMap.findIndex((path) =>
    location.pathname.startsWith(path)
  );

  const handleTabChange = (event, newValue) => {
    navigate(tabMap[newValue]);
  };

  return (
    <Box sx={{ p: 2 }}>
      <Tabs value={tabValue} onChange={handleTabChange}>
        <Tab label="Test Data" />
        <Tab label="Steps" />
        <Tab label="Charts" />
      </Tabs>

      <Box mt={2}>
        <Routes>
          <Route path="/" element={<TestData />} />
          <Route path="test-data" element={<TestData />} />
          <Route path="steps" element={<Steps />} />
          <Route path="charts" element={<Charts />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default Analyse;
