import React from 'react';
import { BrowserRouter, Link, NavLink, Route, Switch } from 'react-router-dom'
import HomePage from '../components/HomePage';
import Contact from '../components/Contact';
import Portfolio from '../components/Portfolio';
import PortfolioItemPage from '../components/PortfolioItemPage';
import HelpPage from '../components/HelpPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';


const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={HomePage} exact={true}/>
                <Route path="/portfolio" component={Portfolio} exact={true}/>
                <Route path="/portfolio/:id" component={PortfolioItemPage}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/help" component={HelpPage}/>
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;