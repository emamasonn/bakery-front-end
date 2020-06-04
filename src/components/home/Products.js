import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import ProductCard from './ProductCard'

const useStyle = makeStyles({
    contentHome:{
        marginTop: 200
    }
})

const arrayProduct = [1, 2, 3, 5, 4, 6, 6]

const Products = () => {
    const classes = useStyle()
    return(
        <div>
            {
                arrayProduct.map((data, index)=> (
                    <ProductCard 
                        dataProduct={data} 
                        key={index}
                    />
                ))
            }
        </div>
    )
}

export default Products;