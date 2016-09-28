import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import NavigatorBar from './components/NavigationBar';
import SingupPage from './components/singup/SignupPage';



export default (
    <Route path="/" component={App} >
        <IndexRoute component={ NavigatorBar }/>
        <Route path="singup" components={SingupPage} />
    </Route>
)