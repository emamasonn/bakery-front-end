import React from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import NavegationBar from '../components/NavegationBar/NavegationBar';
import Home from '../components/Home';
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';
import ShoppingCart from '../components/ShoppingCart/ShoppingCart' 
import OrderForm from '../components/OrderForm/OrderForm'

export default function Router() {
  return (
    <BrowserRouter >   
        <NavegationBar />
        <Switch>
            <Route exact path={'/'} component={Home}/>
            <Route exact path='/Contact' component={Contact}/>
            <Route exact path='/Contact' component={Contact}/>
            <Route exact path='/ShoppingCart' component={ShoppingCart}/>
            <Route exact path='/OrderForm' component={OrderForm}/>
        </Switch>
        <Footer/>
    </BrowserRouter>
  );
}