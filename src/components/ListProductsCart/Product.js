import React from 'react';
import Typography from '@material-ui/core/Typography';
import ClearIcon from '@material-ui/icons/Clear';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { deleteProduct } from '../../redux/actions/actions'

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
    contentNamePrice: {
        width: '100%',
        marginLeft: 10,
    }
})

const Product = ({ product, deleteProduct }) => {
    const classes = useStyles()
    const { name, quality, priceUni, _id} = product
    const nameImg = product.img.name
    const handleDeleteProduct = (id) => {
        deleteProduct(id)
    }
    
    return(
        <div className={classes.contentProduct}>
            <img src={`${ process.env.REACT_APP_URL_LOCAL }/imagen/product/${ nameImg }`} className={classes.imgProduct} alt='Product'/>
            <div className={classes.contentNamePrice}>
                <Typography variant='body2'>{ name }</Typography>
                <Typography variant='body2'>{`${ quality } x $ ${priceUni}`}</Typography>
            </div>
            <ClearIcon 
                className={classes.iconClear} 
                onClick={() => handleDeleteProduct(_id)}
            />
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    deleteProduct: (id) => {
      dispatch(deleteProduct(id))
    },
})
  
export default connect( null, mapDispatchToProps )(Product);