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
    maxWidth: 345,
  },
  icon: {
    marginRight: 100,
  },
  padding: {
    padding: 5,
  },
  cardAction: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 10px",
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
        <CardContent className={classes.padding}>
          <Typography
            className={classes.padding}
            variant="body1"
            component="h3"
          >
            Tortita Rica
          </Typography>
        </CardContent>
      </CardActionArea>
      <div className={classes.cardAction}>
        <Typography color="secondary">$300</Typography>
        <CardActions className={classes.padding}>
          <IconButton
            className={classes.icon}
            color="primary"
            className={classes.padding}
          >
            <ShoppingCartRoundedIcon />
          </IconButton>
        </CardActions>
      </div>
    </Card>
  );
};

export default ProductCard;
