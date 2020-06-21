import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
import Product from './Product';

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

const ListProductsCart = (props) => {
    const classes = useStyles();
    const productsInCart = (products) => {
        return(
            <div>
                <List className={classes.listProducts}>
                    {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                        <div key={index}>
                            <Divider className={classes.divider}/>
                            <Product />
                        </div>
                    ))}
                </List>
                <div className={classes.contentSubtotal}>
                    <diV className={classes.subtotal}>
                        <Typography variant='h6'>SUBTOTAL:</Typography>
                        <Typography variant='h6'>$3,728.00</Typography>
                    </diV>
                    <Link to='/ShoppingCart' className={classes.link}>
                      <Button className={classes.showCart}>Ver Carrito</Button>
                    </Link>
                    <Button className={classes.finishOrder}>Finalzar Pedido</Button>
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
            {productsEmptyCart()}

        </React.Fragment>
  );
}

export default ListProductsCart;