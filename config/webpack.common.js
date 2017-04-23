const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const path = require( 'path' );

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
        ]
    };
};
