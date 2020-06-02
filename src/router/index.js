import React from 'react';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import NavegationBar from '../components/NavegationBar'
import Home from '../components/Home';
  
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