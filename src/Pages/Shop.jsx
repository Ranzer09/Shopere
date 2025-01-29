import { Box, CircularProgress, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";
import axios from "axios";
import notfound from "../assets/Images/notfound.png";
import shop from "../assets/Images/shop.jpg";
import "./shop.css";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    axios
      .get("https://dummyjson.com/products")
      .then((response) => {
        setProducts(response.data.products);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      })
      .catch((error) => {
        console.log("Error occured in fetching products", error);
      });
  }, []);

  const searchProducts = (e) => {
    setLoading(true);
    axios
      .get(`https://dummyjson.com/products/search?q=${e.target.value}`)
      .then((response) => {
        setProducts(response.data.products);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      })
      .catch((error) => {
        console.log("Error occured in fetching products", error);
      });
  };
  const filteredProducts =
    search !== ""
      ? products?.filter((product) =>
          product.title?.toLowerCase().includes(search.toLowerCase())
        )
      : products;

  return (
    <Box sx={{ display: "grid" }}>
      <Box className="banner">Shop here</Box>
      <TextField
        id="outlined-basic"
        type="search"
        placeholder="Search product by title"
        label="Search product here"
        // value={search}
        onChange={searchProducts}
        variant="outlined"
        sx={{ justifySelf: "center", marginBlock: "25px" }}
      />
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
          }}
        >
          <CircularProgress size={30} /> Fetching products
        </Box>
      ) : (
        <>
          (
          {filteredProducts.length > 0 ? (
            <Box
              sx={{
                margin: "20px",
                display: "grid",
                gridTemplateColumns: {
                  xs: "repeat(2,1fr)",
                  md: "repeat(3,1fr)",
                },
              }}
            >
              {filteredProducts?.map((product) => (
                <ProductCard key={product.title} product={product} />
              ))}
            </Box>
          ) : (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <img src={notfound} alt="" style={{ width: "20%" }} />
              <Typography
                variant="body"
                sx={{ fontWeight: "bold", fontSize: "25px" }}
              >
                Sorry, No results found :(
              </Typography>
              <Typography variant="body">
                Please check the spelling or try searching for something else
              </Typography>
            </Box>
          )}
          )
        </>
      )}
    </Box>
  );
}
