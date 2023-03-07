const path = require('path');
const { merge } = require('webpack-merge')
const common = require('./webpack.base.config');
const webpack = require('webpack');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    target: 'web',
    devServer: {
        static: path.join(__dirname, 'dist'),
        hot: true,
        port: 9000,
        historyApiFallback: true
    },
    plugins: [
        // add the plugin to your plugins array
        new webpack.DefinePlugin({ "process.env.APP_ENV": JSON.stringify("development") })
    ]
});
