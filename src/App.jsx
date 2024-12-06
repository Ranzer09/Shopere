import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Shop from "./Pages/Shop";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Box } from "@mui/material";
import Product from "./Pages/Product";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Box sx={{ minHeight: "100vh" }}>
          <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/Home" exact element={<Home />} />
            <Route path="/About" exact element={<About />} />
            <Route path="/Shop" exact element={<Shop />} />
            <Route path="/Shop/Product/:id" exact element={<Product />} />
          </Routes>
        </Box>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
