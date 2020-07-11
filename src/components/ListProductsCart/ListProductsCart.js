import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import Product from './Product';
import { connect } from 'react-redux';

const useStyles = makeStyles({
  list: {
    width: 300,
  },
  contentEmptyCart: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  iconEmptyCart: {
    fontSize: 130,
    margin: '30px 0',
    color: '#e0e0e0',
  },
  buttonBack: {
    background: '#ad172b',
    marginTop: 15,
    color: '#fff',
    '&:hover': {
        background: '#b71c1c',
    }
  },
  link: {
      textDecoration: 'none',
  },
  divider: {
      background: '#212121',
  },
  listProducts: {
    padding: 0,
  },
  contentSubtotal: {
    position: 'absolute',
    bottom: 10,
    borderTop: '2px solid #212121',
    width: '100%',
    textAlign: 'center',
  },
  subtotal: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
  },
  showCart: {
    width: '90%',
    background: '#fafafa',
    color: '#212121',
    '&:hover': {
        background: '#eeeeee',
    }
  },
  finishOrder: {
    width: '90%',
    background: '#ad172b',
    color: '#fff',
    marginTop: 10,
    '&:hover': {
        background: '#b71c1c',
    }
  },
});

const ListProductsCart = ({ shoppingCart }) => {
    const classes = useStyles();

    const totalPrice = () => {
      let prices = []
      if(shoppingCart.length !== 0){
          prices = shoppingCart.map((product) => {
              return Number(product.priceUni) * Number(product.quality)
          })
          return prices.reduce((a=0, b)=> a + b) 
      }else{
          return '0.00'
      }
    }

    let total = totalPrice()

    const productsInCart = (total) => {
        return(
            <div>
                <List className={classes.listProducts}>
                    {shoppingCart.map((product, index) => (
                        <div key={index}>
                            <Divider className={classes.divider}/>
                            <Product product={product}/>
                        </div>
                    ))}
                </List>
                <div className={classes.contentSubtotal}>
                    <diV className={classes.subtotal}>
                        <Typography variant='h6'>SUBTOTAL:</Typography>
                        <Typography variant='h6'>{`$ ${ total }`}</Typography>
                    </diV>
                    <Link to='/ShoppingCart' className={classes.link}>
                      <Button className={classes.showCart}>Ver Carrito</Button>
                    </Link>
                    <Link to='/OrderForm' className={classes.link}>
                      <Button className={classes.finishOrder}>Finalzar Pedido</Button>
                    </Link>
                    
                </div>
            </div>
        );
    }

    const productsEmptyCart = () => {
        return(
            <div className={classes.contentEmptyCart}>
                <RemoveShoppingCartIcon className={classes.iconEmptyCart}/>
                <Typography variant="body1">No se econtraron productos</Typography>
                <Link to='/' className={classes.link}>
                    <Button variant="contained" className={classes.buttonBack}>Retornar</Button>
                </Link>
            </div>
        );
    } 
    return (
        <React.Fragment>
            {shoppingCart.length === 0 ? productsEmptyCart() : productsInCart(total)}
        </React.Fragment>
  );
}

const mapStateToProps = state => ({
  shoppingCart: state.orderProductReducer.shoppingCart
})

export default connect( mapStateToProps )(ListProductsCart);