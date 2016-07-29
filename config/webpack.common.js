var webpack = require( 'webpack' );
var HtmlWebpackPlugin = require( 'html-webpack-plugin' );

module.exports = {
    entry: {
        'vendor': './src/vendor.js',
        'app': './src/index.js'
    },

    resolve: {
        extensions: [ '', '.js', '.jsx' ]
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel'
            }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin( {
            name: [ 'app', 'vendor' ]
        } ),

        new HtmlWebpackPlugin( {
            template: './src/index.html'
        } )
    ]
};
