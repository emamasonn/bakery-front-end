import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import RemoveIcon from '@material-ui/icons/Remove';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles({
    trTable: {
        '@media (max-width:600px)': {
            position: 'relative',
            display: 'flex',
            flexDirection: 'column',
            marginTop: 30,
            borderTop: '2px solid #EFEFEF',
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
    buttonDeleteIcon: {
        display: 'flex',
        padding: '6px 0',
        alignItems: 'center',
        justifyContent: 'flex-end',
    },
    tdImg: {
        borderTop: '2px solid #EFEFEF',
        '@media (max-width:600px)': {
            position: 'absolute',
            border: 'none',
            borderTop: 'none',
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
        '&:hover': {
            background: '#d32f2f',
        }
    },
    icon: {
        fontSize: 15,
    },
    quantityNumber: {
        margin: 5,
        fontSize: 15,
    },
    addIcon: {
        minWidth: 30,
        background: '#ad172b',
        '@media (max-width:600px)': {
            padding: 0,
        },
        '&:hover': {
            background: '#d32f2f',
        }
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
});
const RowProduct = () => {
    const classes = useStyles();

    return(
        <tr className={classes.trTable}>
            <td className={classes.deleteIcon}>
                <Button className={classes.buttonDeleteIcon}><DeleteForeverIcon /></Button>
            </td>
            <td className={classes.tdImg}>
                <img className={classes.productImg} src='https://www.cocinacaserayfacil.net/wp-content/uploads/2019/11/Comida-francesa.jpg'/>
            </td>
            <td className={classes.tdNameProduct}>
                <Typography variant='body2'>Nombre del producto</Typography>
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
    )
}

export default RowProduct;