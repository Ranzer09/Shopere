import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import StarIcon from "@mui/icons-material/Star";
import { Chip, Rating } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";

export default function ProductCard({ product }) {
  return (
    <Card
      sx={{
        maxWidth: 445,
        minWidth: 220,
        padding: "10px",
        margin: "10px",
        borderRadius: "10px",
        backgroundColor: "#fff",
        display: "grid",
        transition: "background-color 0.3s ease, transform 0.4s ease",
        "&:hover": {
          backgroundColor: "#57d3fe",
          color: "black",
          transform: "scale(1.01)",
        },
      }}
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
        <Button
          size="small"
          sx={{
            backgroundColor: "#fff",
            color: "black",
            fontFamily: "sans-serif",
            boxShadow: "gray 1px 1px 5px",
            transition: "background-color 0.3s ease, transform 0.3s ease",
            "&:hover": {
              backgroundColor: "blue",
              color: "white",
              transform: "scale(1.05)",
            },
          }}
          component={Link}
          to={`/Shop/Product/${product.id}`}
        >
          View
        </Button>
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
                  ? "#e69500"
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
