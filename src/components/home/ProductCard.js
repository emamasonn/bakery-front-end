import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ProductImage from "../../assets/productimage.jpg";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import ShoppingCartRoundedIcon from "@material-ui/icons/ShoppingCartRounded";
import { findByLabelText } from "@testing-library/react";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    margin: '0 5px 40px 5px',
    '@media (max-width:600px)': {
      margin: '0 auto 40px auto',
    }
  },
  icon: {
    //marginRight: 100,
  },
  padding: {
    padding: 5,
  },
  cardAction: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    margin: 10,
  },
  action: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  nameProduct: {
    fontSize: 15,
  },
  buttonDetail: {
    fontSize: 15,
  },
  priceProduct: {

  },
  shoppingCart: {

  },
});

const ProductCard = () => {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="300"
          image={ProductImage}
          title="Contemplative Reptile"
        />
      </CardActionArea>
      <div className={classes.cardAction}>
        <div className={classes.action}>
          <Typography className={classes.nameProduct}>Nombre del producto</Typography>
          <Button className={classes.buttonDetail}>Detalle</Button>
        </div>
        <div className={classes.action}>
          <Typography color="secondary">$300</Typography>
          <Button
            className={classes.icon}
            color="primary"
          >
            <ShoppingCartRoundedIcon />
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ProductCard;