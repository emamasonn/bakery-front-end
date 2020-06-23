import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ProductCard from "./ProductCard";
import { Grid } from "@material-ui/core";

const useStyle = makeStyles({
  contentHome: {
    //marginTop: 200,
  },
  flexContainer: {
    display: "flex",
  },
  padding: {
    //paddingTop: "50px",
    //paddingBottom: "50px",
  },
});

const arrayProduct = [1, 2, 3, 5, 4, 6, 6];

const Products = () => {
  const classes = useStyle();
  return (
    <React.Fragment>
      {arrayProduct.map((data, index) => (
        <Grid xs={12} sm={6} md={4}>
          <ProductCard dataProduct={data} key={index} />
        </Grid>
      ))}
    </React.Fragment>
  );
};

export default Products;
