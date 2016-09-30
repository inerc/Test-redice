import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import NavigationBar from './components/NavigationBar';
import SingupPage from './components/singup/SignupPage';
import Users from './components/Users';

export default (
    <Route path="/" component={App} >
        <IndexRoute component={ NavigationBar } />
        <Route path="login" components={SingupPage} />
        <Route path="users" components={ Users } />
    </Route>
)