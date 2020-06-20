import React from 'react';
import Typography from '@material-ui/core/Typography';
import ClearIcon from '@material-ui/icons/Clear';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    contentProduct: {
        display: 'flex',
        justifyContent: 'space-between',
        padding: 15,
    },
    imgProduct: {
        width: 70,
        height: 60,
    },
    iconClear: {
        fontSize: 15,
    },
})

const Product = () => {
    const classes = useStyles()
    return(
        <div className={classes.contentProduct}>
            <img src='https://www.cocinacaserayfacil.net/wp-content/uploads/2019/11/Comida-francesa.jpg' className={classes.imgProduct}/>
            <div>
                <Typography variant='body2'>Nombre de la comida</Typography>
                <Typography variant='body2'>1 x $1,245.00</Typography>
            </div>
            <ClearIcon className={classes.iconClear}/>
        </div>
    );
}

export default Product;