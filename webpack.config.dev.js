var ExctractTextPlugin = require('extract-text-webpack-plugin');

import path from 'path'
import webpack from 'webpack';

export default {
    devtools: 'eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        path.join(__dirname, '/client/index.js')
    ],
    output: {
        path: '/',
        publicPath: '/'
    },
    plugins: [
        new webpack.NoErrorsPlugin(),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                include:[
                    path.join(__dirname, 'client'),
                    path.join(__dirname, 'server/shared')
                ],
                loaders: [ 'react-hot', 'babel' ]
            },

            {
                test: /\.less$/,
                loader: 'style!css!less!img'
            },
            {
                test: /\.(png|jpg|svg)$/,
                loaders: ['url', 'image-webpack']
            }
        ]
    },
    resolve: {
        extentions: [ '', '.js' ]
    }
}