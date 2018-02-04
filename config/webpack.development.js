const path = require( 'path' );
const webpackMerge = require( 'webpack-merge' );
const commonConfig = require( './webpack.common.js' );

module.exports = function( options ) {
    return webpackMerge( commonConfig( options ), {
        devtool: 'cheap-module-source-map',         // Required for the React Dev Utils overlay

        output: {
            filename: '[name].[hash:8].js',
            pathinfo: true,
            publicPath: options[ 'publicPath' ],
            devtoolModuleFilenameTemplate: info =>
                path.resolve(info.absoluteResourcePath).replace(/\\/g, '/'),
        },

    } );
};
