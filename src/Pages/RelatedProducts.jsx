import { Box, Chip } from "@mui/material";
import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";
import { Link } from "react-router-dom";

export default function RelatedProducts({ product, setLoading }) {
  console.log(product.id, "relatedproduct hit here");
  return (
    <Card
      sx={{
        width: "100%",
        height: "100%",
        padding: "10px",
        margin: "10px",
        borderRadius: "10px",
        backgroundColor: "#fff",
        textDecoration: "none",
        display: "grid",
        transition: "background-color 0.3s ease, transform 0.4s ease",
        "&:hover": {
          backgroundColor: "#57d3fe",
          color: "black",
          transform: "scale(1.01)",
        },
      }}
      component={Link}
      to={`/Shop/Product/${product.id}`}
      onClick={() => setLoading(true)}
    >
      <CardMedia
        sx={{
          height: 340,
          margin: "5px",
          boxShadow: "gray 1px 1px 6px",
          borderRadius: "10px",
          backgroundColor: "white",
        }}
        image={product.thumbnail}
        title={product.title}
        // price rating button
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="body"
          component="div"
          sx={{ margin: "5px", fontSize: "25px" }}
        >
          {product.title}
        </Typography>
        <Typography
          gutterBottom
          variant="body2"
          component="div"
          sx={{ margin: "5px" }}
        >
          {product.category}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            margin: "5px",
            fontSize: "20px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          Price:${product.price}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          justifySelf: "center",
          alignSelf: "baseline",
          display: "flex",
          width: "100%",
          justifyContent: "space-between",
        }}
      >
        <Chip
          label={product.rating}
          sx={{
            padding: "10px",
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
              background:
                product.rating > 4
                  ? "green"
                  : product.rating > 3
                  ? "gold"
                  : product.rating > 2
                  ? "orange"
                  : "red",
              transform: "scale(1.1)",
            },
          }}
          icon={<StarIcon color="white" />}
        />
      </CardActions>
    </Card>
  );
}
