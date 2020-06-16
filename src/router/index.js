import React from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import NavegationBar from '../components/NavegationBar/NavegationBar';
import Home from '../components/Home';
import  makeStyles  from '@material-ui/core/styles/makeStyles';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer' 

 /*const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      background: '#263238',
      color: '#fff',
    },
    tabtext: {
      color: '#fff',
      textDecoration: 'unset',
    },
 }));*/

export default function Router() {
  return (
    <BrowserRouter >   
        <NavegationBar />
        <Switch>
            <Route exact path={'/'} component={Home}/>
            <Route exact path='/Contact' component={Contact}/>
        </Switch>
        <Footer/>
    </BrowserRouter>
  );
}