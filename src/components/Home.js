import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

const useStyle = makeStyles({
    contentHome:{
        height: 5000,
        marginTop: 200
    }
})

const Home = () => {
    const classes = useStyle()
    return(
        <div className={classes.contentHome}>
            Esto es el home

        </div>
    )
}

export default Home;