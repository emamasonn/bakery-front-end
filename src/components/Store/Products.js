import React from "react";
import ProductCard from "./ProductCard";
import Grid from "@material-ui/core/Grid";

const arrayProduct = [1, 2, 3, 5, 4, 6, 6, 1, 2, 3, 5, 4, 6, 6];

const Products = () => {
  return (
    <React.Fragment>
      {arrayProduct.map((data, index) => (
        <Grid xs={6} sm={6} md={3}>
          <ProductCard dataProduct={data} key={index} />
        </Grid>
      ))}
    </React.Fragment>
  );
};

export default Products;
