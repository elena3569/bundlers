const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

module.exports = {
    entry: resolve(__dirname,'src', 'main.js'),
    output: {
        path: resolve(__dirname, 'build'),
        filename: 'main.[contenthash].js'
    },
    devServer: {
        port: 3001
    },
    module: {
        rules: [
            { 
                test: /\.css$/, 
                use: [MiniCssExtractPlugin.loader, 'css-loader'] 
            },
            { 
                test: /\.mp3$/, 
                use: [
                    {
                        loader: 'file-loader',
                        options: {                            
                            name: '[name].[ext]',
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({template: resolve(__dirname, 'index.html')}),
        new MiniCssExtractPlugin({ 
            filename: '[name].[contenthash].css'
        }),
        new BundleAnalyzerPlugin({
            analyzerMode: 'server',
            analyzerPort: '3034',
          })
    ] 
};