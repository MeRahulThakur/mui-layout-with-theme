// pages/analyse/Analyse.js
import React, { useState } from "react";
import { Box, Tabs, Tab, Tooltip, useTheme } from "@mui/material";
import BarChartIcon from "@mui/icons-material/BarChart";
import TableChartIcon from "@mui/icons-material/TableChart";
import TimelineIcon from "@mui/icons-material/Timeline";
import Charts from "./analyse/Charts";
import Steps from "./analyse/Steps";
import TestData from "./analyse/TestData";
import ChartsFilter from "./analyse/filters/ChartsFilter";
import StepsFilter from "./analyse/filters/StepsFilter";
import TestDataFilter from "./analyse/filters/TestDataFilter";

const tabOptions = [
  { icon: <TableChartIcon />, key: "testData", label: "Test Data" },
  { icon: <TimelineIcon />, key: "steps", label: "Steps" },
  { icon: <BarChartIcon />, key: "charts", label: "Charts" },
];

function Analyse() {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState("testData"); //used for which filters UI to show.
  const [lastSubmittedTab, setLastSubmittedTab] = useState("testData"); //controls which content stays until the next filter change.

  const [filters, setFilters] = useState({
    testData: { keyword: "" },
    steps: { stepType: "" },
    charts: { chartType: "bar" },
  });

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  const handleFilterChange = (tabKey, newFilters) => {
    setFilters((prev) => ({
      ...prev,
      [tabKey]: newFilters,
    }));
    setLastSubmittedTab(tabKey);
  };

  const getFilterComponent = () => {
    switch (activeTab) {
      case "testData":
        return (
          <TestDataFilter
            filters={filters.testData}
            setFilters={(newF) => handleFilterChange("testData", newF)}
          />
        );
      case "steps":
        return (
          <StepsFilter
            filters={filters.steps}
            setFilters={(newF) => handleFilterChange("steps", newF)}
          />
        );
      case "charts":
        return (
          <ChartsFilter
            filters={filters.charts}
            setFilters={(newF) => handleFilterChange("charts", newF)}
          />
        );
      default:
        return null;
    }
  };

  const getContentComponent = () => {
    switch (lastSubmittedTab) {
      case "testData":
        return <TestData filters={filters.testData} />;
      case "steps":
        return <Steps filters={filters.steps} />;
      case "charts":
        return <Charts filters={filters.charts} />;
      default:
        return null;
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "100%",
        backgroundColor: theme.palette.background.default,
      }}
    >
      {/* Vertical Tabs */}
      <Box
        sx={{ width: 100, borderRight: `1px solid ${theme.palette.divider}` }}
      >
        <Tabs
          orientation="vertical"
          value={activeTab}
          onChange={handleTabChange}
          variant="scrollable"
          sx={{ height: "100%", alignItems: "center" }}
        >
          {tabOptions.map((tab) => (
            <Tab
              key={tab.key}
              value={tab.key}
              icon={
                <Tooltip
                  title={tab.label}
                  placement="right"
                  slotProps={{
                    popper: {
                      modifiers: [
                        { name: "offset", options: { offset: [0, 6] } },
                      ],
                    },
                  }}
                >
                  <span>{tab.icon}</span>
                </Tooltip>
              }
            />
          ))}
        </Tabs>
      </Box>

      {/* Filter Section */}
      <Box
        sx={{
          width: 280,
          p: 2,
          borderRight: `1px solid ${theme.palette.divider}`,
          backgroundColor: theme.palette.background.paper,
          overflowY: "auto",
        }}
      >
        {getFilterComponent()}
      </Box>

      {/* Content Section */}
      <Box
        sx={{
          flexGrow: 1,
          p: 2,
          overflowY: "auto",
          color: theme.palette.text.primary,
        }}
      >
        {getContentComponent()}
      </Box>
    </Box>
  );
}

export default Analyse;
