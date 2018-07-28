import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Link, NavLink, Route, Switch } from 'react-router-dom'
import 'normalize.css/normalize.css'
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
    <div>
        This is from my dashboard component
    </div>
)

const AddExpensePage = () => (
    <div>
        This is from my AddExpensePage component
    </div>
)

const EditExpensePage = () => (
    <div>
        This is from my EditExpensePage component
    </div>
)

const HelpPage = () => (
    <div>
        This is from my HelpPage component
    </div>
)

const NotFound = () => (
    <div>
    404! Not Found
    <Link to="/">Go home</Link>
    </div>
)

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact="true">Home </NavLink>
        <NavLink to="/create" activeClassName="is-active">Create </NavLink>
        <NavLink to="/edit" activeClassName="is-active">Edit </NavLink>
        <NavLink to="/help" activeClassName="is-active">Help </NavLink>
    </header>
)

const routes = (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={ExpenseDashboardPage} exact={true}/>
                <Route path="/create" component={AddExpensePage}/>
                <Route path="/edit" component={EditExpensePage}/>
                <Route path="/help" component={HelpPage}/>
                <Route component={NotFound}/>
            </Switch>
        </div>
    </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));

