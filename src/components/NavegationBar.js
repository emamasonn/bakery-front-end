import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import Divider from '@material-ui/core/Divider'
import AppBar from '@material-ui/core/AppBar';
import logo from '../assets/logo.png'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';

const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      background: '#263238',
      color: '#fff',
      flexDirection: 'initial',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0 40px',
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
        width: 150,
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
    margin0: {
        margin: 0,
    }
}));



const NavegationBar = () => {
    const classes = useStyles();
    window.onscroll = function() {handleScroll()};

    const handleScroll = () => {
        console.log("ff")
        console.log(window.scrollY)
        if (window.scrollY > 50 ) {
            document.getElementById("appbar-navegation").classList.remove(`${classes.root}`)
            document.getElementById("appbar-navegation").classList.add(`${classes.rootScroll}`)
        }else{
            document.getElementById("appbar-navegation").classList.remove(`${classes.rootScroll}`)
            document.getElementById("appbar-navegation").classList.add(`${classes.root}`)
        }
    }

    return(
        <AppBar position="fixed" className={classes.root} id="appbar-navegation">
            <div>
                <Link to="/" className={classes.linkText}>Tienda</Link>
                <Link to="/contacto" className={classes.linkText}>Contacto</Link>
            </div>
            <div>
                <Link to="/" ><img src={logo} className={classes.logo}/></Link>
            </div>
            <div className={classes.contentShopping}>
                <ShoppingCartIcon />
                <Divider orientation="vertical" flexItem className={classes.dividerShopping}/>
                <div>
                    <p className={classes.margin0}>$0.00</p>
                    <p className={classes.margin0}>0 Productos</p>
                </div>

            </div>
        </AppBar>
    )
}

export default NavegationBar

