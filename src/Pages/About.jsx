import { Avatar, Box, Grid2, Typography } from "@mui/material";
import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import about from "../assets/Images/aboutbg.jpeg";
import "./about.css";

export default function About() {
  return (
    <Box sx={{ flexGrow: 1, padding: "2px" }}>
      <Box
        style={{
          backgroundImage:
            "url('https://images.pexels.com/photos/4483610/pexels-photo-4483610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          width: "100vw",
          height: "366px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          className="main-heading2"
          variant="h1"
          sx={{
            color: "white",
            backgroundColor: "#00000078",
            padding: "5px",
            borderRadius: "5px",
          }}
        >
          ABOUT US
        </Typography>
      </Box>
      <Grid2 container>
        <Grid2
          size={{ xs: 12, sm: 6 }}
          sx={{ display: "flex", justifyContent: "right" }}
        >
          <img
            src={about}
            style={{ width: "540px", height: "100%" }}
            alt="aboutimg"
          />
        </Grid2>

        <Grid2 size={{ xs: 12, sm: 6 }}>
          <Box
            sx={{
              textAlign: "left",
              paddingTop: "50px",
              paddingLeft: "20px",
              width: "560px",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                textAlign: "left",
                fontSize: "40px",
                fontWeight: "600",
                fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
              }}
            >
              Welcome to Shopere an eCommerce website For shopping
            </Typography>
            <br />
            <Typography sx={{ color: "gray" }}>
              We are passionate about bringing you the best in quality products
              across a wide range of categories, from fashion and beauty to home
              goods, electronics, and more.
            </Typography>
            <br />
            <Typography sx={{ color: "gray" }}>
              At Shopere, we believe that shopping should be convenient,
              enjoyable, and accessible for everyone. Whether you're searching
              for the latest trends, essential everyday items, or unique finds,
              we make it easy to discover products you’ll love, at prices you’ll
              adore.
            </Typography>
            <br />
            <Typography sx={{ color: "gray" }}>
              Our mission is simple: to provide our customers with a seamless
              shopping experience that combines variety, value, and exceptional
              service. We strive to make online shopping easy, secure, and fun,
              bringing you the products you want, right to your doorstep.
            </Typography>
          </Box>
        </Grid2>
      </Grid2>
    </Box>
  );
}
