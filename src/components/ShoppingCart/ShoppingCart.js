import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";
import RowProduct from './RowProduct';
import { connect } from 'react-redux';

const useStyles = makeStyles({
    contentTable:{
        marginTop: 160,
        marginBottom: 50,
        '@media (max-width:600px)': {
            marginTop: 100,
        },
    },
    table: {
        borderSpacing: 'unset',
        width: 'inherit',
        '& td': {
            '&:before': {
                '@media (max-width:600px)': {
                    content: 'attr(data-title)',
                    color: '#2d2a2a',
                    fontSize: 12,
                    fontWeight: 400,
                    textTransform: 'uppercase',
                    paddingTop: 3,
                    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'
                },
            }
        },
    },
    thead: {
        fontFamily: "Dancing Script, cursive",
        color: "#2d2a2a", 
        fontSize: 20,
        textAlign: 'left',
        '& th': {
            fontWeight: '400',
        },
        '@media (max-width:600px)': {
            display: 'none',
        },
    },
    contentButtonFinish:{
        marginTop: 30,
        textAlign: 'right',
        '@media (max-width:600px)': {
            textAlign: 'center',
        },
    },
    buttonFinishOrder: {
        background: '#ad172b',
        color: '#fff',
        '&:hover': {
            background: '#d32f2f',
        }
    },
    linkButtonFinish: {
        textDecoration: 'none',
    },
    titleListProduct: {
        fontFamily: "Dancing Script, cursive",
        display: 'flex',
        justifyContent: 'center',
        color: "#ad172b" 
    },
    contentTitle: {
        marginBottom: 50,
        '@media (max-width:600px)': {
            marginBottom: 0,
        },
    },
    contentTotal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        marginTop: 30,
    },
    titleTotal: {
        marginRight: 25,
    },
    priceTotal: {
        color: '#ad172b',
        fontSize: 20,
    },
});

const ShoppingCart = ({ shoppingCart }) => {
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

    return (
        <Container maxWidth='lg' className={classes.contentTable}>
            <div className={classes.contentTitle}>
                <Typography variant='h4' className={classes.titleListProduct}>Lista de Productos</Typography>
            </div>
            <table className={classes.table}>
                <thead className={classes.thead}>
                    <tr>
                        <th></th>
                        <th></th>
                        <th>Producto</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th>Total</th>
                    </tr>
                </thead>
                <tbody>
                    {shoppingCart.map((cart, index)=>(
                        <RowProduct key={index} product={cart}/>
                    ))}
                </tbody>
            </table>
            <div className={classes.contentTotal}>
                <Typography variant='h6' className={classes.titleTotal}>Total</Typography>
                <Typography variant='body1' className={classes.priceTotal}>{`$ ${ total }`}</Typography>
            </div>
            <div className={classes.contentButtonFinish}>
                <Link to='/OrderForm' className={classes.linkButtonFinish}>
                    <Button variant="contained" className={classes.buttonFinishOrder}>FINALIZAR PEDIDO</Button>
                </Link>
            </div>
        </Container>
  );
}

const mapStateToProps = state => ({
    shoppingCart: state.orderProductReducer.shoppingCart
})
  
export default connect( mapStateToProps )(ShoppingCart);