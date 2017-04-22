const path = require( 'path' );

module.exports = function( options ) {
    return {
        output: {
            path: path.resolve( __dirname, '../dist' ),
            filename: '[name].bundle.js',
            publicPath: options[ 'publicPath' ],
            sourceMapFilename: '[name].map'
        },
        plugins: [
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
            } )
            // ,
            // new webpack.LoaderOptionsPlugin( {
            //     minimize: true,
            //     debug: false
            // } ),
            // new webpack.optimize.UglifyJsPlugin( {
            //     beautify: false,
            //     mangle: {
            //         screw_ie8: true,
            //         keep_fnames: true
            //     },
            //     compress: {
            //         screw_ie8: true
            //     },
            //     comments: false
            // } )
        ]
    }
};
