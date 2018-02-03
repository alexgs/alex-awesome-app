const webpackMerge = require( 'webpack-merge' );
const commonConfig = require( './webpack.common.js' );
const devConfig = require( './webpack.development' );
const sassLoaders = require( './sass-loaders' );

module.exports = function( options ) {
    return webpackMerge( commonConfig( options ), devConfig( options ), {
        entry: [
            require.resolve( 'react-dev-utils/webpackHotDevClient' ),
            './src/index.js'
        ],

        module: {
            // TODO Can this be simplified?
            /**
             * Load styles directly into the DOM when running the dev server.
             * "ExtractTextPlugin" doesn't get along with HMR.
             */
            rules: [ {
                test: /\.scss$/,
                use: [ 'style-loader', 'css-loader', 'sass-loader' ]
                // test: [ /\.sass$/, /\.scss$/ ],
                // use: [ {
                //     loader: require.resolve( 'style-loader' )
                // } ].concat( sassLoaders )
            } ]
        },

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
            // Enable HMR globally
            // new webpack.HotModuleReplacementPlugin(),

            // Print more readable module names in the browser console on HMR updates
            // new webpack.NamedModulesPlugin(),
        ]
    } );
};
