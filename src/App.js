import { Box } from "@mui/material";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Analyse from "./pages/Analyse";
import Design from "./pages/Design";
import Landing from "./pages/Landing";

function App() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", height: "100%" }}>
      <Navbar />
      <Box sx={{ flexGrow: 1, overflow: "auto" }}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/analyse/*" element={<Analyse />} />
          <Route path="/design" element={<Design />} />
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
