import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import Divider from '@material-ui/core/Divider'
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import logo from '../../assets/logo.png'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import MenuIcon from '@material-ui/icons/Menu';
import Hidden from '@material-ui/core/Hidden';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Typography from '@material-ui/core/Typography';
import ListProductsCart from '../ListProductsCart/ListProductsCart'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      background: '#263238',
      color: '#fff',
      flexDirection: 'initial',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 40px',
      '@media (max-width:500px)': {
        padding: '0 10px',
    },
    },
    rootScroll: {
        background: '#263238',
        color: '#fff',
        flexDirection: 'initial',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '0 40px',
        opacity: '0.9',
        webkitTransition: 'all .6s',
        transition: 'all .6s',
        
    },
    linkText: {
        color: '#fff',
        textDecoration: 'none',
        fontSize: 20,
        margin: '0 10px',
        display: 'flex',
    },
    logo: {
        width: 75,
        margin: 5,
        borderRadius: "100%",
        '@media (max-width:500px)': {
            width: 65,
        },
    },
    contentShopping: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '0 10px',
    },
    dividerShopping: {
        margin: '0px 12px',
        background: 'red',
    },
    textProduct: {
        margin: 0,
        '@media (max-width:500px)': {
            fontSize: 13,
        },
    },
    textPrice: {
        margin: 0,
        '@media (max-width:500px)': {
            fontSize: 16,
        },
    },
    buttonBurger: {
        padding: 0,
        textAlign: 'left',
        color: '#fff',
        justifyContent: 'flex-start'
    },
    linkTextBurger:{
        display: 'flex',
        textDecoration: 'none',
        marginRight: 20,
        color: '#fff',
    },
    drawer: {
        width: 200,
        background: '#101010',
        height: '100%',
    },
    drawerShopping: {
        width: 300,
        background: '#101010',
        height: '100%',
        color: '#fff',
    },
    titleOrder: {
        margin: '15px auto',
        textAlign: 'center',
    },
    divider: {
        background: '#ad172b',
    },
    dividerMenu: {
        background: '#616161',
    },
    contentLinkNavegation: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    redesSocial:{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 20,
    },
    linkSocial: {
        color: '#fff',
        margin: 5,
    },
    buttonArrow: {
        width: '100%',
        padding: '10px 10px 0 10px',
        color: '#fff',
        justifyContent: 'flex-start',
    }
}));

const NavegationBar = ({ shoppingCart }) => {
    const classes = useStyles();
    const [drawer, setDrawer] = useState(false);
    const [drawerShopping, setDrawerShopping] = useState(false);
    window.onscroll = function() {handleScroll()};

    const handleScroll = () => {
        if (window.scrollY > 50 ) {
            document.getElementById("appbar-navegation").classList.remove(`${classes.root}`)
            document.getElementById("appbar-navegation").classList.add(`${classes.rootScroll}`)
        }else{
            document.getElementById("appbar-navegation").classList.remove(`${classes.rootScroll}`)
            document.getElementById("appbar-navegation").classList.add(`${classes.root}`)
        }
    }

    const toggleDrawer = () => {
        drawer ? setDrawer(false) : setDrawer(true)
    }

    const toggleDrawerShopping = () => {
        drawerShopping ? setDrawerShopping(false) : setDrawerShopping(true)
    }

    const qualityProduct = shoppingCart.length

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
    
    return(
        <AppBar position="fixed" className={classes.root} id="appbar-navegation">
            <Hidden smUp>
                <div>
                    <Button onClick={toggleDrawer} className={classes.buttonBurger}><MenuIcon /></Button>
                    <Drawer open={drawer} onClick={toggleDrawer} className={classes.drawer}>
                        <div onClick={toggleDrawer} className={classes.drawer}>
                            <div className={classes.redesSocial}>
                                <Link to="https://www.facebook.com/" className={classes.linkSocial}><FacebookIcon/></Link>
                                <Link to="https://www.instagram.com" className={classes.linkSocial}><InstagramIcon/></Link>
                            </div>
                            <List>
                                <ListItem button key='tienda' >
                                    <Link to="/" className={classes.linkTextBurger}>
                                        <ListItemText primary='Tienda' />
                                    </Link>
                                </ListItem>
                                <Divider className={classes.dividerMenu}/>
                                <ListItem button key='contacto'>
                                    <Link to="/Contact" className={classes.linkTextBurger}>
                                        <ListItemText primary='Contacto'/>
                                    </Link>
                                </ListItem>
                                <Divider className={classes.dividerMenu}/>
                            </List>
                        </div>
                    </Drawer>
                </div>
            </Hidden>
            <Hidden xsDown>
                <div className={classes.contentLinkNavegation}>
                    <Link to="https://www.facebook.com/" className={classes.linkText}><FacebookIcon/></Link>
                    <Link to="https://www.instagram.com" className={classes.linkText}><InstagramIcon/></Link>
                    <Divider orientation="vertical" flexItem className={classes.dividerShopping}/>
                    <Link to="/" className={classes.linkText}>Tienda</Link>
                    <Link to="/Contact" className={classes.linkText}>Contacto</Link>
                </div>
            </Hidden>
            <div>
                <Link to="/" ><img src={logo} className={classes.logo} alt='logo'/></Link>
            </div>
            <div className={classes.contentShopping}>
                <ShoppingCartIcon onClick={toggleDrawerShopping}/>
                <Divider orientation="vertical" flexItem className={classes.dividerShopping}/>
                <div>
                    <p className={classes.textPrice}>{`$ ${ total }`}</p>
                    <p className={classes.textProduct}>{`${ qualityProduct } Productos`}</p>
                </div>
                <Drawer 
                    open={drawerShopping} 
                    onClose={toggleDrawerShopping}  
                    anchor='right'
                >   
                    <div className={classes.drawerShopping}>
                        <Button onClick={toggleDrawerShopping} 
                            className={classes.buttonArrow}
                        >
                            <ArrowForwardIosIcon />
                        </Button>
                        <Typography variant="h6" className={ classes.titleOrder}>MI PEDIDO</Typography>
                        <Divider className={classes.divider}/>
                        <ListProductsCart />
                    </div>
                </Drawer>
            </div>
        </AppBar>
    )
}

const mapStateToProps = state => ({
    shoppingCart: state.orderProductReducer.shoppingCart
})
  
export default connect( mapStateToProps )(NavegationBar);
