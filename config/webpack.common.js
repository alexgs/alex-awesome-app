const ExtractTextPlugin = require( "extract-text-webpack-plugin" );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );

module.exports = function( options ) {
    return {
        entry: {
            app: './src/index.js'
        },

        resolve: {
            extensions: [ '*', '.js', '.jsx' ]
        },

        module: {
            rules: [
                /**
                 * The "ExtractTextPlugin" doesn't work with HMR, and disabling it via its
                 * `disable` option doesn't appear to work. I came up with this configuration
                 * as a work-around.
                 */
                options.extractCss ? {      // TODO Can this be simplified?
                    test: /\.scss$/,
                    use: ExtractTextPlugin.extract( {
                        use: [
                            { loader: 'css-loader' },
                            { loader: 'sass-loader' }
                        ]
                    } )
                } : { },

                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader'
                }
            ]
        },

        output: {
            path: options.outputPath,
        },

        plugins: [
            new HtmlWebpackPlugin( {
                template: './public/index.html'
            } ),

            new ExtractTextPlugin( {
                filename: "[name].[contenthash].css",
            } )
        ],

        stats: {
            children: false,
            chunks: true,
            chunkModules: false,
            chunkOrigins: false,
            modules: false,
            timings: true,
            version: true
        }

    };
};
