import React, { useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import ProductImage from "../../assets/productimage.jpg";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ModalDetailProduct from '../ModalDetailProduct/ModalDeatilProduct'
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
    margin: '0 5px 40px 5px',
    '@media (max-width:600px)': {
      margin: '0 7px 20px 7px',
    }
  },
  imgProduct:{
    '@media (max-width:600px)': {
      height: 170,
    }
  },
  icon: {
    padding: 0,
    minWidth: 'min-content',
    color: '#ad172b',
    '&:hover':{
      color: '#d32f2f',
    }
  },
  padding: {
    padding: 5,
  },
  cardAction: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexDirection: 'column',
    margin: 7,
  },
  action: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '100%',
    marginTop: 2,
  },
  nameProduct: {
    fontSize: 13,
  },
  cardActionArea: {
    position: 'relative',
  },
  buttonDetail: {
    position: 'absolute',
    top: 7,
    right: 7,
    background: 'red',
    fontSize: 12,
    padding: 0,
    borderRadius: '100%',
    background: '#eeeeee',
    minWidth: 'unset',
    height: 40,
    width: 40,
    '&:hover':{
      color: '#ad172b',
      background: '#fafafa',
    }
  },
  priceProduct: {
    marginLeft: 5,
    fontSize: 15,
    '&:hover':{
      color: '#ad172b',
    }
  },
});

const ProductCard = () => {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false);

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <React.Fragment>
    <Card className={classes.root}>
      <CardActionArea className={classes.cardActionArea}>
        <CardMedia
          className={classes.imgProduct}
          component="img"
          alt="Image product"
          image={ProductImage}
          title="Image Product"
        />
        <Button className={classes.buttonDetail} onClick={handleOpenModal}><SearchIcon /></Button>
      </CardActionArea>
      <div className={classes.cardAction}>
        
          <Typography className={classes.nameProduct}>Nombre del producto</Typography>
        
        <div className={classes.action}>
          <Button
            className={classes.icon}
          >
            <AddShoppingCartIcon />
          </Button>
          <Typography className={classes.priceProduct}>$300</Typography>
        </div>
      </div>
    </Card>
    <ModalDetailProduct open={openModal} handleClose={handleCloseModal}/>
    </React.Fragment>
  );
};

export default ProductCard;
