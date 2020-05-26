import React from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import Home from '../components/Home';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      background: '#263238',
      color: '#fff',
    },
    tabtext: {
      color: '#fff',
      textDecoration: 'unset',
    },
  }));
  
export default function Router() {
  const classes = useStyles();

  return (
    <BrowserRouter >
        <AppBar position="static" className={classes.root}>
          <Tabs>
            <Link to="/"><Tab className={classes.tabtext} label="Home" /></Link>
          </Tabs>
        </AppBar>
        <Switch>
            <Route exact path={'/'} component={Home}/>
        </Switch>
    </BrowserRouter>
  );
}