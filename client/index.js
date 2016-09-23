/**
 * Created by inerc on 21.09.16.
 */

import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import '../server/static/style.css';


import routes from './routes';

render(<Router history={browserHistory} routes={routes} />, document.getElementById('app'));