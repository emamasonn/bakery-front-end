import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import ModalDetailProduct from '../ModalDetailProduct/ModalDeatilProduct';
import SearchIcon from '@material-ui/icons/Search';
import { connect } from 'react-redux';
import { addProduct } from '../../redux/actions/actions';

const useStyles = makeStyles({
  root: {
    maxWidth: 250,
    margin: '0 5px 40px 5px',
    '@media (max-width:600px)': {
      margin: '0 7px 20px 7px',
    },
  },
  imgProduct: {
    '@media (max-width:600px)': {
      height: 170,
    },
  },
  icon: {
    padding: 0,
    minWidth: 'min-content',
    color: '#ad172b',
    '&:hover': {
      color: '#d32f2f',
    },
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
    fontSize: 12,
    padding: 0,
    borderRadius: '100%',
    background: '#eeeeee',
    minWidth: 'unset',
    height: 40,
    width: 40,
    '&:hover': {
      color: '#ad172b',
      background: '#fafafa',
    },
  },
  priceProduct: {
    marginLeft: 5,
    fontSize: 15,
    '&:hover': {
      color: '#ad172b',
    },
  },
});

const ProductCard = ({ dataProduct, addProduct }) => {
  const classes = useStyles();
  const [openModal, setOpenModal] = useState(false);
  const { name, priceUni } = dataProduct;
  const nameImg = dataProduct.img.name;

  const handleOpenModal = () => {
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const addProductShoppingCart = () => {
    let product = {
      ...dataProduct,
      quality: 1,
    };
    addProduct(product);
  };

  return (
    <React.Fragment>
      <Card className={classes.root}>
        <CardActionArea className={classes.cardActionArea}>
          <CardMedia
            className={classes.imgProduct}
            component="img"
            alt="Image product"
            image={`${process.env.REACT_APP_URL_LOCAL}/imagen/${nameImg}`}
            title="Image Product"
          />
          <Button className={classes.buttonDetail} onClick={handleOpenModal}>
            <SearchIcon />
          </Button>
        </CardActionArea>
        <div className={classes.cardAction}>
          <Typography className={classes.nameProduct}>{name}</Typography>
          <div className={classes.action}>
            <Button className={classes.icon} onClick={addProductShoppingCart}>
              <AddShoppingCartIcon />
            </Button>
            <Typography
              className={classes.priceProduct}
            >{`$ ${priceUni}`}</Typography>
          </div>
        </div>
      </Card>
      {/* Modal */}
      <ModalDetailProduct
        open={openModal}
        handleClose={handleCloseModal}
        data={dataProduct}
      />
    </React.Fragment>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addProduct: (product) => {
    dispatch(addProduct(product));
  },
});

export default connect(null, mapDispatchToProps)(ProductCard);
