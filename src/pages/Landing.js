// src/pages/Landing.js
import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        backgroundColor: "background.default",
        color: "text.primary",
        px: 2,
      }}
    >
      <Typography variant="h2" gutterBottom>
        Welcome to the App
      </Typography>
      <Typography variant="h6" color="text.secondary" mb={4}>
        Start analysing or designing with the tools we’ve built.
      </Typography>
      <Box sx={{ display: "flex", gap: 2 }}>
        <Button
          variant="contained"
          onClick={() => navigate("/analyse/test-data")}
        >
          Go to Analyse
        </Button>
        <Button variant="outlined" onClick={() => navigate("/design")}>
          Go to Design
        </Button>
      </Box>
    </Box>
  );
};

export default Landing;
