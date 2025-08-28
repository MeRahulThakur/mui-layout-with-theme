// pages/Analyse.js
import React, { useState } from "react";
import { Box, Tabs, Tab, Tooltip, useTheme } from "@mui/material";
import BarChartIcon from "@mui/icons-material/BarChart";
import TableChartIcon from "@mui/icons-material/TableChart";
import TimelineIcon from "@mui/icons-material/Timeline";
import { TestData } from "./analyse/TestData";
import { Steps } from "./analyse/Steps";
import { Charts } from "./analyse/Charts";

const tabOptions = [
  {
    icon: <TableChartIcon />,
    key: "testData",
    label: "Test Data",
    Module: TestData,
  },
  { icon: <TimelineIcon />, key: "steps", label: "Steps", Module: Steps },
  { icon: <BarChartIcon />, key: "charts", label: "Charts", Module: Charts },
];

function Analyse() {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState("testData");
  const [lastSubmittedTab, setLastSubmittedTab] = useState("testData");
  const [isFilterVisible, setIsFilterVisible] = useState(true);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
    setIsFilterVisible(true);
    setLastSubmittedTab(newValue); // ✅ update content when switching tabs
  };

  const ActiveTab = tabOptions.find((t) => t.key === activeTab)?.Module;

  return (
    <Box
      sx={{
        display: "flex",
        height: "100%",
        backgroundColor: theme.palette.background.default,
      }}
    >
      {/* Tabs */}
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
              onClick={() => {
                if (tab.key === activeTab) setIsFilterVisible((prev) => !prev);
              }}
            />
          ))}
        </Tabs>
      </Box>

      {/* Active tab with shared Provider */}
      {ActiveTab && (
        <ActiveTab.Provider>
          {/* Filter Pane */}
          {isFilterVisible && ActiveTab.Filter && (
            <Box
              sx={{
                width: 280,
                p: 2,
                borderRight: `1px solid ${theme.palette.divider}`,
                backgroundColor: theme.palette.background.paper,
                overflowY: "auto",
              }}
            >
              <ActiveTab.Filter />
            </Box>
          )}

          {/* Content */}
          <Box
            sx={{
              flexGrow: 1,
              p: 2,
              overflowY: "auto",
              color: theme.palette.text.primary,
            }}
          >
            <ActiveTab.Content />
          </Box>
        </ActiveTab.Provider>
      )}
    </Box>
  );
}

export default Analyse;
