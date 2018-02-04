const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const utils = require( './utils' );

module.exports = function( options ) {
    return {
        entry: {
            app: './src/index.js'
        },

        resolve: {
            // Resolve rules are adapted from "Create React App"
            modules: [ 'node_modules' ],
            extensions: [ '.web.js', '.js', '.json' ]
        },

        module: {
            rules: utils.getRules( options )
        },

        output: {
            path: options.outputPath,
        },

        plugins: [
            new HtmlWebpackPlugin( {
                template: './public/index.html'
            } ),

            new ExtractTextPlugin( {
                filename: utils.names.css,
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
