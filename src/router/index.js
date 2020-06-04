import React from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import NavegationBar from '../components/NavegationBar'
import Home from '../components/home'
import Footer from '../components/Footer/Footer';
import Contacto from '../components/contacto'

export default function Router() {
  return (
    <BrowserRouter >   
        <NavegationBar />
        <Switch>
            <Route exact path={'/'} component={Home}/>
            <Route exact path={'/contacto'} component={Contacto}/>
        </Switch>
        <Footer/>
    </BrowserRouter>
  );
}