import React from "react";
import { Box, Typography } from "@mui/material";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import "./Home.css";
import Landing from "./Landing";
import About from "./About";
import Shop from "./Shop";

export default function Home() {
  return (
    <Box>
      {/* <Box><Navbar/></Box> */}
      <Box className="home-container">
        <Landing />
      </Box>
      <Box sx={{ paddingTop: "10px" }}>
        <Shop />
      </Box>
      <Box sx={{ paddingTop: "10px" }}>
        <About />
      </Box>
      {/* <Box><Footer/></Box> */}
    </Box>
  );
}
