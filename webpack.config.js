const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: [
        './src/app.js'
    ],
    watch: true,
    watchOptions: {
        aggregateTimeout: 500,
        poll: 1000,
        ignored: /node_modules/
    },
    devtool: 'source-maps',
    devServer: {
        contentBase: path.join(__dirname, 'src'),
        watchContentBase: true,
        hot: true,
        open: true,
        inline: true
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack starter project',
            template: path.resolve('./src/index.html')
        }),
        new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        rules: [
            {
              test: /\.scss$/,
              use: [
                'style-loader',
                "css-loader",
                "sass-loader"
              ]
            },
            {
              test: /\.m?js$/,
              exclude: /(node_modules|bower_components)/,
              use: {
                loader: 'babel-loader',
                options: {
                  presets: ['@babel/preset-env']
                }
              }
            },
            {
              test: /\.(jpg|jpeg|gif|png|svg|webp)$/,
              use: [
                {
                  loader: "file-loader",
                  options: {
                    outputPath: './images',
                    name: "[name].[ext]",
                  },
                },
              ]
            },
            {
              test: /\.html$/,
              use: {
                loader: 'html-loader',
              }
            },
        ]
    },
}