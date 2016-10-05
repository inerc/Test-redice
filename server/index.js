/**
 * Created by inerc on 21.09.16.
 */

import express from "express";
import path from 'path';
import bodyParser from 'body-parser';
import request from 'request';

import webpack from 'webpack';
import webpackMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../webpack.config.dev';

import users from './routes/users';

let app = express();

app.use(bodyParser.json());

app.use('/api/users', users);

const compiler = webpack(webpackConfig);

app.use(webpackMiddleware(compiler,{
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    noInfo:true
}));

app.use(webpackHotMiddleware(compiler));

app.post('/api/auth', (req, res, next) => {
    let {login, password} = req.body;

    console.log(req.body, req.body.login);

    req.pipe(request(`http://62.76.25.114:90/v1/login?login=${login}&password=${password}`, {
            method: 'GET',
            headers: {
                'api_key': 'olnjascdo02w3iejADFASFnd2k3j22'
            }
        }, (err, apiRes) => {
            if (err !== null) {
                res.status(500);
                res.send(JSON.stringify({error: 'huui'}));
                next();
                return;
            }
            let response = JSON.parse(apiRes.body);

            res.status(response.status || 200);

            res.send(apiRes.body);
            next();
        }
    ));


  // req.pipe(request({
  //       // will be ignored
  //       method: 'GET',
  //       uri: 'http://62.76.25.114:90/v1/login?login=${login}&password=${password}',
  //
  //       har: {
  //
  //           headers: [
  //               {
  //                   api_key: 'olnjascdo02w3iejADFASFnd2k3j22',
  //               }
  //           ],
  //
  //       }
  //   }).pipe(res));

});

app.get('/*', (req, res) => {
        res.sendFile(path.join(__dirname, './index.html'));

});

app.listen(3000, () => console.log('Running on localhost:3000'));