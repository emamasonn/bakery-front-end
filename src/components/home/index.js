import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Categories from './Categories'
import Products from './Products'

const useStyle = makeStyles({
    contentGrid:{
        marginTop: 80
    },
    contentCategory: {
        //background: 'red'
    },
    contentProducts: {
        //background: 'green'
    }

})


const Home = () => {
    const classes = useStyle()
    return(
        <Container className={classes.contentGrid}>
            <Grid container spacing={3}>
                <Grid item xs={3} className={classes.contentCategory}>
                    <Categories />
                </Grid>
                <Grid item xs={9} className={classes.contentProducts}>
                    <Products />
                </Grid>
            </Grid>
        </Container>
    )
}

export default Home;