import React from 'react';
import { Route, IndexRoute } from 'react-router';


import App from './containers/App';
import LoginPage from './containers/LoginPage';
import NavigationBar from  './components/NavigationBar';


export default (
    <Route path="/" component={App} >
        <IndexRoute component={ NavigationBar } />
        <Route path="login" components={LoginPage} >

        </Route>
    </Route>
)