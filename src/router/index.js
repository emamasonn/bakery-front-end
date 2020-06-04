import React from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import NavegationBar from '../components/NavegationBar'
import Home from '../components/Home'
import { makeStyles } from '@material-ui/core/styles';
import Footer from '../components/Footer/Footer';

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
  return (
    <BrowserRouter >   
        <NavegationBar />
        <Switch>
            <Route exact path={'/'} component={Home}/>
        </Switch>
    </BrowserRouter>
  );
}