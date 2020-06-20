import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';
import { Link } from "react-router-dom";
import { Divider } from '@material-ui/core';

const useStyles = makeStyles({
    contentTable:{
        marginTop: 180,
        marginBottom: 50,
        /*display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',*/
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
    productImg: {
        width: 70,
        height: 60,
        margin: 5,
        '@media (max-width:600px)': {
            width: 115,
            height: 117,
        },
    },
    productName: {
        //margin: '0px 10px',
    },
    quantity: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    removeIcon: {
        minWidth: 30,
        background: '#ad172b',
        '@media (max-width:600px)': {
            padding: 0,
        },
    },
    addIcon: {
        minWidth: 30,
        background: '#ad172b',
        '@media (max-width:600px)': {
            padding: 0,
        },
    },
    deleteIcon:{
        borderTop: '2px solid #EFEFEF',
        '@media (max-width:600px)': {
            display: 'flex',
            justifyContent: 'flex-end',
            borderTop: 'none',
        },
    },
    trTable: {
        '@media (max-width:600px)': {
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            marginTop: 30,
            borderTop: '2px solid #EFEFEF',
        },
    },
    tdImg: {
        borderTop: '2px solid #EFEFEF',
        '@media (max-width:600px)': {
            position: 'absolute',
            border: 'none',
            borderTop: 'none',
        },
    },
    tdNameProduct: {
        borderTop: '2px solid #EFEFEF',
        '@media (max-width:600px)': {
            position: 'absolute',
            border: 'none',
            left: 125,
            top: 10,
            borderTop: 'none',
        },
    },
    tdPrice: {
        borderTop: '2px solid #EFEFEF',
        '@media (max-width:600px)': {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: 125,
            borderTop: 'none',
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            fontSize: 16,
            marginTop: 5,
        },
    },
    tdQuantity: {
        borderTop: '2px solid #EFEFEF',
        '@media (max-width:600px)': {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: 125,
            borderTop: 'none',
        },
    },
    tdTotal: {
        borderTop: '2px solid #EFEFEF',
        '@media (max-width:600px)': {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingLeft: 125,
            borderTop: 'none',
            color: "#ad172b",
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
            fontSize: 16,
            marginTop: 5,
        },
    },
    contentButtonFinish:{
        marginTop: 50,
        textAlign: 'right',
        '@media (max-width:600px)': {
            textAlign: 'center',
        },
    },
    buttonFinishOrder: {
        background: '#ad172b',
        color: '#fff',
        '&:hover': {
            background: '#b71c1c',
        }
    },
    linkButtonFinish: {
        textDecoration: 'none',
    },
    titleListProduct: {
        fontSize: 25,
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
    icon: {
        fontSize: 15,
    },
    quantityNumber: {
        margin: 5,
        fontSize: 15,
    },
});

const ShoppingCart = () => {
  const classes = useStyles();

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
                    {[1, 2, 3, 4, 5, 6].map((e, index)=>(
                    <tr className={classes.trTable}>
                        <td className={classes.deleteIcon}>
                            <Button><DeleteForeverIcon /></Button>
                        </td>
                        <td className={classes.tdImg}>
                            <img className={classes.productImg} src='https://www.cocinacaserayfacil.net/wp-content/uploads/2019/11/Comida-francesa.jpg'/>
                        </td>
                        <td className={classes.tdNameProduct}>
                            <Typography variant='body2' className={classes.productName}>Nombre del producto</Typography>
                        </td>
                        <td className={classes.tdPrice} data-title='Precio'>$1,090.00</td>
                        <td className={classes.tdQuantity} data-title='Cantidad'>
                            <div className={classes.quantity}>
                                <Button className={classes.removeIcon}><RemoveIcon className={classes.icon}/></Button>
                                <Typography variant='body2' className={classes.quantityNumber}>1</Typography>
                                <Button className={classes.addIcon}><AddIcon className={classes.icon}/></Button>
                            </div>
                        </td>
                        <td className={classes.tdTotal} data-title='Total'>$1,090.00</td>
                    </tr>
                    ))}
                    
                </tbody>
            </table>
            <div className={classes.contentButtonFinish}>
                <Link to='/OrderForm' className={classes.linkButtonFinish}>
                    <Button variant="contained" className={classes.buttonFinishOrder}>FINALIZAR PEDIDO</Button>
                </Link>
            </div>
        </Container>
  );
}

export default ShoppingCart;