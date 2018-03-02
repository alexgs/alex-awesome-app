const webpack = require( 'webpack' );
const ManifestPlugin = require( 'webpack-manifest-plugin' );
const webpackMerge = require( 'webpack-merge' );
const commonConfig = require( './webpack.common.js' );

module.exports = function( options ) {
    return webpackMerge( commonConfig( options ), {
        // Don't attempt to continue if there are any errors.
        bail: true,

        devtool: 'source-map',

        output: {
            filename: '[name].[hash:8].js',
            publicPath: options[ 'publicPath' ],
        },

        plugins: [
            new webpack.DefinePlugin( {
                'process.env.NODE_ENV': JSON.stringify( 'production' )
            } ),

            new webpack.optimize.CommonsChunkPlugin( {
                /**
                 * Put all imports exist from the node_modules directory into
                 * the "vendor" bundle.
                 */
                name: 'vendor',
                minChunks: function( module ) {
                    return module.context && module.context.indexOf( 'node_modules' ) !== -1;
                }
            } ),

            new webpack.optimize.CommonsChunkPlugin( {
                /**
                 * CommonChunksPlugin will now extract all the common modules
                 * from vendor and main bundles. However, there are no more
                 * common modules between them. Thus, we end up with just the
                 * runtime code included in the manifest file.
                 */
                name: 'manifest'
            } ),

            new webpack.optimize.UglifyJsPlugin( {
                // Options copied from "Create React App"
                compress: {
                    warnings: false,
                    comparisons: false,             // Disabled because of an issue with Uglify breaking seemingly valid code <https://github.com/facebookincubator/create-react-app/issues/2376>
                },
                mangle: {
                    safari10: true,
                },
                output: {
                    comments: false,
                    ascii_only: true,               // Turned on because emoji and regex is not minified properly using default <https://github.com/facebookincubator/create-react-app/issues/2488>
                },
                sourceMap: false,
            } ),

            new ManifestPlugin({
                fileName: 'asset-manifest.json',
            })
        ]
    } );
};
