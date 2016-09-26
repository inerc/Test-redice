import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/App';
import Greetings from './components/Greetings';
import SingupPage from './components/singup/SignupPage';

export default (
    <Route path="/" component={App} >
        <IndexRoute component={ Greetings } />
        <Route path="singup" components={SingupPage} />
    </Route>
)