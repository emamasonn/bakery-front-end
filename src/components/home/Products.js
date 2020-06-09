import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ProductCard from "./ProductCard";
import { Grid } from "@material-ui/core";

const useStyle = makeStyles({
  contentHome: {
    marginTop: 200,
  },
  flexContainer: {
    display: "flex",
  },
  padding: {
    paddingTop: "50px",
    paddingBottom: "50px",
  },
});

const arrayProduct = [1, 2, 3, 5, 4, 6, 6];

const Products = () => {
  const classes = useStyle();
  return (
    <Grid container spacing={3} className={classes.padding}>
      {arrayProduct.map((data, index) => (
        <Grid item md={4} sm={6} xs={12}>
          <ProductCard dataProduct={data} key={index} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Products;
