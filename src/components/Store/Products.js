import React from "react";
import ProductCard from "./ProductCard";
import Grid from "@material-ui/core/Grid";
import { connect } from 'react-redux';

const Products = ({ products }) => {

  return (
    <React.Fragment>
      {products.map((product, index) => (
        <Grid item xs={6} sm={6} md={3} key={index}>
          <ProductCard dataProduct={product} />
        </Grid>
      ))}
    </React.Fragment>
  );
};

const mapStateToProps = state => ({
  products: state.startReducer.products
})

export default connect( mapStateToProps )(Products);
