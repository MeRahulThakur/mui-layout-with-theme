import React, { useState } from "react";
import { Box, Tabs, Tab, Tooltip, useTheme } from "@mui/material";
import BarChartIcon from "@mui/icons-material/BarChart";
import TableChartIcon from "@mui/icons-material/TableChart";
import TimelineIcon from "@mui/icons-material/Timeline";

import TestData from "./analyse/TestData/index";
import Steps from "./analyse/Steps/index";
import Charts from "./analyse/Charts/index";

const tabs = [
  {
    key: "testData",
    label: "Test Data",
    icon: <TableChartIcon />,
    Module: TestData,
  },
  { key: "steps", label: "Steps", icon: <TimelineIcon />, Module: Steps },
  { key: "charts", label: "Charts", icon: <BarChartIcon />, Module: Charts },
];

export default function Analyse() {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState("testData"); // which filter UI is visible
  const [lastSubmittedTab, setLastSubmittedTab] = useState("testData"); // which content is shown
  const [isFilterVisible, setIsFilterVisible] = useState(true); // VS Code-style toggle

  const handleTabChange = (_e, newValue) => {
    if (newValue !== activeTab) {
      // switched tab → always show filter
      setActiveTab(newValue);
      setIsFilterVisible(true);
    }
  };

  const handleTabClick = (key) => {
    if (key === activeTab) {
      // same tab → toggle filter visibility
      setIsFilterVisible((v) => !v);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "100%",
        bgColor: theme.palette.background.default,
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
          slotProps={{
            indicator: { sx: { left: 0, width: 4, bgcolor: "primary.main" } },
          }}
          sx={{
            height: "100%",
            alignItems: "center",
          }}
        >
          {tabs.map(({ key, label, icon }) => (
            <Tab
              key={key}
              value={key}
              icon={
                <Tooltip
                  title={label}
                  placement="right"
                  slotProps={{
                    popper: {
                      modifiers: [
                        { name: "offset", options: { offset: [0, 6] } },
                      ],
                    },
                  }}
                >
                  <span>{icon}</span>
                </Tooltip>
              }
              onClick={() => handleTabClick(key)}
            />
          ))}
        </Tabs>
      </Box>

      {/* Two fixed slots via CSS Grid: left filter, right content */}
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: isFilterVisible ? "280px 1fr" : "1fr",
          gridTemplateAreas: isFilterVisible ? `"filter content"` : `"content"`,
          flexGrow: 1,
          minWidth: 0, // fix overflow in flex/grid
        }}
      >
        {/* Mount all modules; only the chosen ones render into slots */}
        {tabs.map(({ key, Module }) => (
          <Module
            key={key}
            showFilter={isFilterVisible && activeTab === key}
            showContent={lastSubmittedTab === key}
            onSubmit={() => setLastSubmittedTab(key)}
          />
        ))}
      </Box>
    </Box>
  );
}
