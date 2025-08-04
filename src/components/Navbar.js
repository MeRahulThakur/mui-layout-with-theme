import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Tabs,
  Tab,
  Box,
  IconButton,
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { Brightness4, Brightness7 } from "@mui/icons-material";
import { useAppTheme } from "../theme/ThemeContext";

function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const { mode, toggleMode } = useAppTheme();

  const tabValue = location.pathname.startsWith("/design") ? 1 : 0;

  const handleChange = (e, newValue) => {
    navigate(newValue === 0 ? "/analyse" : "/design");
  };

  return (
    <AppBar position="static">
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box display="flex" alignItems="center">
          <img
            src="/logo192.png"
            alt="logo"
            style={{ width: 40, marginRight: 10 }}
          />
          <Typography variant="h6" noWrap>
            My App
          </Typography>
        </Box>
        <Box display="flex" alignItems="center">
          <Tabs
            value={tabValue}
            onChange={handleChange}
            textColor="inherit"
            indicatorColor="secondary"
          >
            <Tab label="Analyse" />
            <Tab label="Design" />
          </Tabs>
          <IconButton color="inherit" onClick={toggleMode}>
            {mode === "dark" ? <Brightness7 /> : <Brightness4 />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
