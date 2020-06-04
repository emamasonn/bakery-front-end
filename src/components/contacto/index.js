import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
    contentContacto:{
        height: 500,
        marginTop: 200
    }
})


const Contacto = () => {
    const classes = useStyle()

    return(
        <div className={classes.contentContacto}>
            Esto es el componente contacto!
        </div>
    )
}

export default Contacto;