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
import Landing from "./Landing";

function Analyse() {
  const navigate = useNavigate();
  const location = useLocation();
  // 🔥 Persistent filters for each tab
  const [testDataFilters, setTestDataFilters] = useState({ keyword: "" });
  const [stepsFilters, setStepsFilters] = useState({ stepType: "" });
  const [chartsFilters, setChartsFilters] = useState({ chartType: "bar" });

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
        <Route
          path="test-data"
          element={
            <TestData
              filters={testDataFilters}
              setFilters={setTestDataFilters}
            />
          }
        />
        <Route
          path="steps"
          element={
            <Steps filters={stepsFilters} setFilters={setStepsFilters} />
          }
        />
        <Route
          path="charts"
          element={
            <Charts filters={chartsFilters} setFilters={setChartsFilters} />
          }
        />
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<Navigate to="/analyse/test-data" />} />{" "}
        {/* Catch-all */}
      </Routes>
    </Box>
  );
}

export default Analyse;
