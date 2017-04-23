const ExtractTextPlugin = require( "extract-text-webpack-plugin" );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const path = require( 'path' );

const extractSass = new ExtractTextPlugin( {
    filename: "[name].[contenthash].css",
    // disable: process.env.NODE_ENV === "development"
} );

module.exports = function( options ) {
    return {
        entry: {
            app: './src/index.jsx'
        },

        resolve: {
            extensions: [ '*', '.js', '.jsx' ]
        },

        module: {
            rules: [
                {
                    test: /\.scss$/,
                    use: extractSass.extract( {
                        use: [
                            { loader: "css-loader" },
                            { loader: "sass-loader" }
                        ]
                    } )
                },
                {
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                    query: {
                        presets: [ 'react' ]
                    }
                }
            ]
        },

        output: {
            path: options.outputPath,
        },

        plugins: [
            new HtmlWebpackPlugin( {
                template: './src/index.html'
            } ),
            extractSass
        ]
    };
};
