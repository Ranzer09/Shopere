import { Box, Chip, Grid, Grid2, Rating, Typography } from "@mui/material";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import StarIcon from "@mui/icons-material/Star";
import React, { useEffect, useState } from "react";
import RelatedProducts from "./RelatedProducts";
import ProductCard from "../Components/ProductCard";

export default function ProductDetails({ product, related }) {
  const [current, setCurrent] = useState(0);
  const [showReview, setShowReview] = useState(null);

  return (
    <Box sx={{ flexGrow: 1, justifyContent: "center", padding: "10px" }}>
      <Grid2 spacing={2} container>
        <Grid2
          size={{ xs: 12, sm: 5, md: 3 }}
          component={Paper}
          sx={{
            boxShadow: "gray 1px 1px 6px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              width: "100%",
              height: "100vh",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              gap: "20px",
              paddingBlock: "20px",
              overflow: "auto",
            }}
          >
            {product.images?.map((url, index) => (
              <img
                src={url}
                key={index}
                alt="image"
                width={150}
                height={150}
                style={{
                  boxShadow: "gray 1px 1px 6px",
                  borderRadius: "10px",
                }}
                onClick={() => setCurrent(index)}
              />
            ))}
          </Box>
        </Grid2>
        <Grid2
          size={{ xs: 12, sm: 2, md: 4 }}
          component={Paper}
          sx={{
            boxShadow: "gray 1px 1px 6px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              height: "100vh",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <img
              src={product.images[current]}
              alt="image"
              style={{ height: "100%", width: "100%", objectFit: "contain" }}
            />
          </Box>
        </Grid2>
        <Grid2
          size={{ xs: 12, md: 5 }}
          component={Paper}
          sx={{
            boxShadow: "gray 1px 1px 6px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "start",
              flexDirection: "column",
              justifyContent: "space-between",
              gap: "10px",
              paddingBlock: "20px",
              paddingInline: "10px",
            }}
          >
            <Typography
              sx={{
                textTransform: "uppercase",
                fontWeight: "600",
                fontSize: "14px",
              }}
            >
              {product.brand}
            </Typography>
            <Typography
              sx={{
                fontSize: { sx: "24px", sm: "20px" },
                fontWeight: "600",
                textTransform: "uppercase",
              }}
            >
              {product.title}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "10px",
                alignItems: "center",
              }}
            >
              <Chip
                label={product.rating}
                onClick={() => setShowReview(1)}
                sx={{
                  padding: "5px",
                  color: "white",
                  background:
                    product.rating > 4
                      ? "green"
                      : product.rating > 3
                      ? "gold"
                      : product.rating > 2
                      ? "#e69500"
                      : "red",
                  transition: "transform 0.3s ease",
                  cursor: "pointer",
                  "&:hover": {
                    transform: "scale(1.05)",
                    background:
                      product.rating > 4
                        ? "green"
                        : product.rating > 3
                        ? "gold"
                        : product.rating > 2
                        ? "#e69500"
                        : "red",
                  },
                }}
                icon={<StarIcon color="white" fontSize={"20px"} />}
              />
              <Typography>{product.reviews.length} reviews</Typography>
            </Box>
            <Typography
              sx={{ fontSize: "18px", color: "green", fontWeight: "600" }}
            >
              {" "}
              Extra {product.discountPercentage}% Off{" "}
            </Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                gap: "10px",
                alignItems: "center",
              }}
            >
              <Typography sx={{ fontSize: "30px" }}>
                ${product.price}
              </Typography>
              <Typography
                sx={{ fontSize: "15px", textDecoration: "line-through" }}
              >
                $
                {product.price +
                  Math.round(product.price * product.discountPercentage) / 100}
              </Typography>
            </Box>
            <Typography sx={{ fontSize: "12px" }}>
              {product.shippingInformation}
            </Typography>
            <Box>
              <TableContainer>
                <Table sx={{ maxWidth: "100%" }} aria-label="simple table">
                  <TableBody>
                    <TableRow>
                      <TableCell>Description</TableCell>
                      <TableCell>
                        <Typography sx={{ fontSize: "13px" }} maxWidth="100%">
                          {product.description}
                        </Typography>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Warranty Information</TableCell>
                      <TableCell sx={{ fontSize: "13px" }}>
                        {product.warrantyInformation}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Return Policy</TableCell>
                      <TableCell sx={{ fontSize: "13px" }}>
                        {product.returnPolicy}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Status</TableCell>
                      <TableCell sx={{ fontSize: "13px" }}>
                        {product.availabilityStatus}
                      </TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>
            </Box>
            <Box>
              {showReview &&
                product?.reviews.map((review) => {
                  return (
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        flexDirection: "column",
                        justifyContent: "center",
                        paddingInline: "20px",
                      }}
                    >
                      <Typography component="legend">
                        {review.reviewerName}
                      </Typography>

                      <Typography component="legend">
                        {review.comment}
                        <Rating
                          sx={{ paddingInline: "5px" }}
                          name="read-only"
                          value={review.rating}
                          readOnly
                        />
                      </Typography>
                      <br />
                    </Box>
                  );
                })}
            </Box>
          </Box>
        </Grid2>
      </Grid2>
      <Box
        flexGrow={1}
        ssx={{
          boxShadow: "gray 1px 1px 6px",
        }}
      >
        <Typography
          sx={{ paddingBlock: "20px", fontWeight: "600", fontSize: "24px" }}
        >
          Related Products
        </Typography>
        <Grid2 container spacing={2}>
          {related?.map((product, index) => (
            <Grid2 size={{ xs: 12, sm: 4, md: 3 }}>
              <RelatedProducts key={index} product={product} />
            </Grid2>
          ))}
        </Grid2>
      </Box>
    </Box>
  );
}
