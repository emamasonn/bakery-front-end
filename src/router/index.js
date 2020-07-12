import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavegationBar from "../components/NavegationBar/NavegationBar";
import Store from "../components/Store";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import ShoppingCart from "../components/ShoppingCart/ShoppingCart";
import OrderForm from "../components/OrderForm/OrderForm";

export default function Router() {
  return (
    <BrowserRouter>
      <NavegationBar />
      <Switch>
        <Route exact path={"/"} component={Store} />
        <Route exact path="/Contact" component={Contact} />
        <Route exact path="/ShoppingCart" component={ShoppingCart} />
        <Route exact path="/OrderForm" component={OrderForm} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
