import { Box, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();
  return (
    <Box>
      <footer
        className="text-center text-lg-start bg-primary "
        style={{ marginTop: "20px", color: "white", paddingTop: "5px" }}
      >
        <Box className="">
          <Box className="container text-center text-md-start mt-5">
            <Box className="row mt-3">
              <Box className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                <Typography
                  variant="h6"
                  className="text-uppercase fw-bold mb-4"
                >
                  <Typography className="fas fa-gem me-3"></Typography>Shopere
                </Typography>
                <Typography>
                  Our mission is simple: to provide our customers with a
                  seamless shopping experience that combines variety, value, and
                  exceptional service. We strive to make online shopping easy,
                  secure, and fun, bringing you the products you want, right to
                  your doorstep.
                </Typography>
              </Box>

              <Box className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                <Typography
                  variant="h6"
                  className="text-uppercase fw-bold mb-4"
                >
                  Products
                </Typography>
                <Typography>
                  <Typography
                    sx={{ cursor: "pointer" }}
                    onClick={() => navigate("/")}
                    className="pe-auto text-decoration-underline text-reset"
                  >
                    COSMETICS
                  </Typography>
                </Typography>
                <Typography>
                  <Typography
                    sx={{ cursor: "pointer" }}
                    onClick={() => navigate("/")}
                    className="pe-auto text-decoration-underline text-reset"
                  >
                    FRUITS
                  </Typography>
                </Typography>
                <Typography>
                  <Typography
                    sx={{ cursor: "pointer" }}
                    onClick={() => navigate("/")}
                    className="pe-auto text-decoration-underline text-reset"
                  >
                    FURNITURE
                  </Typography>
                </Typography>
                <Typography>
                  <Typography
                    sx={{ cursor: "pointer" }}
                    onClick={() => navigate("/")}
                    className="pe-auto text-decoration-underline text-reset"
                  >
                    APPLIANCES
                  </Typography>
                </Typography>
              </Box>

              <Box className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                <Typography
                  variant="h6"
                  className="text-uppercase fw-bold mb-4"
                >
                  Contact
                </Typography>
                <Typography>
                  <Typography className="fas fa-home me-3"></Typography>{" "}
                  Mangalore
                </Typography>
                <Typography className="fas fa-envelope me-3">
                  shopere@website.com
                </Typography>
                <Typography className="fas fa-phone me-3">
                  +91 9848753727
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box
          className="text-center p-4"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.05" }}
        >
          © 2021 Copyright
          <Typography
            onClick={() => navigate("/")}
            sx={{ cursor: "pointer" }}
            className="pe-auto text-decoration-underline text-reset fw-bold"
          >
            Shopere.com
          </Typography>
        </Box>
      </footer>
    </Box>
  );
}
