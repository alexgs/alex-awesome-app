const webpackMerge = require( 'webpack-merge' );
const devConfig = require( './webpack.development' );

module.exports = function( options ) {
    return webpackMerge( devConfig( options ), {
        entry: [
            require.resolve( 'react-dev-utils/webpackHotDevClient' ),
            './src/index.js'
        ],

        devServer: {
            // clientLogLevel: 'warning',
            contentBase: options.outputPath,
            hot: false,
            publicPath: options.publicPath,
            stats: {
                children: false,
                chunks: true,
                chunkModules: false,
                chunkOrigins: false,
                modules: false,
                timings: true,
                version: true
            }
        },

        plugins: [
            // TODO Experiment with this a little more...
            // Enable HMR globally
            // new webpack.HotModuleReplacementPlugin(),

            // Print more readable module names in the browser console on HMR updates
            // new webpack.NamedModulesPlugin(),
        ]
    } );
};
