const webpack = require( 'webpack' );
const ManifestPlugin = require( 'webpack-manifest-plugin' );
const webpackMerge = require( 'webpack-merge' );
const commonConfig = require( './webpack.common.js' );

module.exports = function( options ) {
    return webpackMerge( commonConfig( options ), {
        mode: 'production',

        // Don't attempt to continue if there are any errors.
        bail: true,

        devtool: 'source-map',

        optimization: {
            splitChunks: {
                chunks: 'all',
                cacheGroups: {
                    vendor: {
                        // This can be further optimized by using a function to include or exclude based on a config option (i.e. an array)
                        test: /[\\/]node_modules[\\/]/,
                        name: 'vendor'
                    }
                }
            }
        },

        output: {
            filename: 'static/[name].[hash:8].js',
            publicPath: options[ 'publicPath' ],
        },

        plugins: []
    } );
};
