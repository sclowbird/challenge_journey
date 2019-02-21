const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin')



const config = {
    entry: { 
        app: __dirname + '/js/app.js'
        //configure multiple entrypoints like this:
        //secondPage: __dirname + '/js/secondPage.js'
    },
    output: {
        //filename with multiple output paths
        filename: '[name].js',

        path: __dirname + '/dist'
        //filname with single output path
        //filename: 'bundle.js',



    },

    resolve: {
        extensions: ['.js', 'css', '.vue']
    },

    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            
            {
                test: /\.js$/,
                loader: 'babel-loader'
            },

            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            }
        ]
    },

    plugins: [
        //including the plugin!
        new VueLoaderPlugin()
    ],


};

module.exports = config;