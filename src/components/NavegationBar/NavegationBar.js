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
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LocalMallIcon from '@material-ui/icons/LocalMall';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      background: '#263238',
      color: '#fff',
      flexDirection: 'initial',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 40px',
      ['@media (max-width:500px)']: {
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
        margin: '0 10px'
    },
    logo: {
        width: 75,
        margin: 5,
        borderRadius: "100%",
        ['@media (max-width:500px)']: {
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
        ['@media (max-width:500px)']: {
            fontSize: 13,
        },
    },
    textPrice: {
        margin: 0,
        ['@media (max-width:500px)']: {
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
        color: '#263238',
        marginRight: 20,
    },
    drawer: {
        //background: '#101010',
        width: 300,
    }
}));



const NavegationBar = () => {
    const classes = useStyles();
    const [drawer, setDrawer] = useState(false);
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

    return(
        <AppBar position="fixed" className={classes.root} id="appbar-navegation">
            <Hidden smUp>
                <div>
                    <Button onClick={toggleDrawer} className={classes.buttonBurger}><MenuIcon /></Button>
                    <Drawer open={drawer} onClick={toggleDrawer} className={classes.drawer}>
                        <div onClick={toggleDrawer}>
                            <List>
                                <ListItem button key='tienda'>
                                    <Link to="/" className={classes.linkTextBurger}>
                                        <ListItemIcon><LocalMallIcon /></ListItemIcon>
                                        <ListItemText primary='Tienda'/>
                                    </Link>
                                </ListItem>
                                <Divider />
                                <ListItem button key='contacto'>
                                    <Link to="/Contact" className={classes.linkTextBurger}>
                                        <ListItemIcon><LocalMallIcon /></ListItemIcon>
                                        <ListItemText primary='Contacto'/>
                                    </Link>
                                </ListItem>
                            </List>
                        </div>
                    </Drawer>
                </div>
            </Hidden>
            <Hidden xsDown>
                <div>
                    <Link to="/" className={classes.linkText}>Tienda</Link>
                    <Link to="/Contact" className={classes.linkText}>Contacto</Link>
                </div>
            </Hidden>
            <div>
                <Link to="/" ><img src={logo} className={classes.logo}/></Link>
            </div>
            <div className={classes.contentShopping}>
                <ShoppingCartIcon />
                <Divider orientation="vertical" flexItem className={classes.dividerShopping}/>
                <div>
                    <p className={classes.textPrice}>$0.00</p>
                    <p className={classes.textProduct}>0 Productos</p>
                </div>

            </div>
        </AppBar>
    )
}

export default NavegationBar

