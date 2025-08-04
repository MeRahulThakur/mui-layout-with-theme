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
import AnalyseLayout from "./analyse/AnalyseLayout";

function Analyse() {
  const navigate = useNavigate();
  const location = useLocation();

  const tabMap = ["/analyse/test-data", "/analyse/steps", "/analyse/charts"];
  function getCurrentTabValue(pathname) {
    const index = tabMap.findIndex((path) => pathname.startsWith(path));
    return index === -1 ? 0 : index;
  }

  const tabValue = getCurrentTabValue(location.pathname);

  // 🔼 Filter state (shared across all subroutes)
  const [testDataFilters, setTestDataFilters] = useState({ keyword: "" });
  const [stepsFilters, setStepsFilters] = useState({ stepType: "" });
  const [chartsFilters, setChartsFilters] = useState({ chartType: "bar" });

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

      <AnalyseLayout
        filters={{
          testData: {
            filters: testDataFilters,
            setFilters: setTestDataFilters,
          },
          steps: { filters: stepsFilters, setFilters: setStepsFilters },
          charts: { filters: chartsFilters, setFilters: setChartsFilters },
        }}
      >
        <Routes>
          <Route
            path="test-data"
            element={<TestData filters={testDataFilters} />}
          />
          <Route path="steps" element={<Steps filters={stepsFilters} />} />
          <Route path="charts" element={<Charts filters={chartsFilters} />} />
          <Route path="/" element={<TestData filters={testDataFilters} />} />
          <Route path="*" element={<Navigate to="/analyse/test-data" />} />{" "}
          {/* Catch-all */}
        </Routes>
      </AnalyseLayout>
    </Box>
  );
}

export default Analyse;
