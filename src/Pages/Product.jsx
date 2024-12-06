import { Box, CircularProgress } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductDetails from "./ProductDetails";

export default function Product() {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);
  const [related, setRelated] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/" + id) //first api
      .then((response) => {
        setProduct(response.data);
        window.scrollTo({ top: 0, behavior: "smooth" });
      })
      .catch((error) => {
        console.log("Error occured in fetching products", error);
      });
  }, [id]);
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        "https://dummyjson.com/products/category/" +
          product?.category +
          "?limit=4"
      ) //second api
      .then((response) => {
        console.log(response.data, "relatedproducts");
        console.log(product);
        console.log(
          "request https://dummyjson.com/products/category/" + product?.category
        );
        setRelated(response.data.products);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
      });
  }, [product]);
  const filteredRelatedProducts = related.filter(
    (item) => item.category === product.category && item.id != id
  );
  return (
    <>
      {loading ? (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "50vh",
          }}
        >
          <CircularProgress size={30} /> Fetching your product
        </Box>
      ) : (
        <ProductDetails product={product} related={filteredRelatedProducts} />
      )}
    </>
  );
}
