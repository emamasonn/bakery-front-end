import React, { useState} from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Hidden from "@material-ui/core/Hidden";
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ListIcon from '@material-ui/icons/List';
import Categories from "./Categories";
import Products from "./Products";

const useStyle = makeStyles({
  contentGrid: {
    marginTop: 180,
    '@media (max-width:600px)': {
      marginTop: 100,
    }
  },
  drawer: {
    width: 300,
    padding: 10,
  },
  categoriesMobile:{
    padding: '0 15px',
  },
  arrowDrawer: {
    display: 'flex',
    justifyContent: 'flex-end',
    padding: '15px 0',
    color: '#9e9e9e',
  },
  divider: {
    marginBottom: 19,
  },
  contentCategory: {
    padding: 6,
  },
  contentProducts: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  contentFilter:{
    display: 'flex',
    justifyContent: 'flex-start',
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  filterButton: {
    padding: 0,
    minWidth: 'min-content',
    margin: '0 10px',
  },
  iconFilter: {
    fontSize: 30,
  },
});

const Home = () => {
  const classes = useStyle();

  const [openCategories, setOpenCategories] = useState(false);

  const toggleDrawer = () => {
    openCategories ? setOpenCategories(false) : setOpenCategories(true)
  };


  return (
    <Container className={classes.contentGrid}>
      <Grid container>
        <Hidden smUp>
          <div className={classes.contentFilter}>
            <Button onClick={toggleDrawer} className={classes.filterButton}><ListIcon className={classes.iconFilter}/></Button>
            <Typography variant='body1'>Mostrar Filtros</Typography>
          </div>
          <Drawer open={openCategories} onClose={toggleDrawer} className={classes.drawer}>
            <Button onClick={toggleDrawer} className={classes.arrowDrawer}><ArrowBackIosIcon /></Button>
            <div className={classes.categoriesMobile}>
              <Divider className={classes.divider}/>
              <Categories />
            </div>
          </Drawer>
        </Hidden>
        <Hidden xsDown>
          <Grid sm={3} md={2} item className={classes.contentCategory}>
            <Categories />
          </Grid>
        </Hidden>
        <Grid item sm={9} md={10} xs={12} className={classes.contentProducts}>
          <Products />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
