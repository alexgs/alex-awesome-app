const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
const path = require( 'path' );

const names = {
    css: '[name].[hash:8].css',
    file: 'static/[name].[hash:8].[ext]',
    image: 'media/[name].[hash:8].[ext]'
};

function getFileRule( options ) {
    return {
        loader: require.resolve( 'file-loader' ),
        exclude: [ /\.(js|jsx|mjs)$/, /\.html$/, /\.json$/ ],
        options: {
            name: names.file,
        }
    };
}

function getImageRule( options ) {
    return {
        test: [ /\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/ ],
        loader: require.resolve( 'url-loader' ),
        options: {
            limit: 10000,
            name: names.image
        }
    };
}

function getJavaScriptRule( options ) {
    return {
        test: /\.(js|jsx)$/,
        include: path.resolve( options.rootPath, './src' ),
        loader: require.resolve( 'babel-loader' ),
        options: {
            cacheDirectory: true
        }
    };
}

function getRules( options ) {
    // Rules are adapted from "Create React App"
    const rules = [
        {
            oneOf: [
                getImageRule( options ),
                getJavaScriptRule( options ),
                getSassRule( options ),
                // The "file" rule is a catch-all and must always be last
                getFileRule( options )
            ]
        }
    ];
    if ( options.print.rules ) {
        console.log( `>--+--<\n${JSON.stringify( rules, null, 2 )}\n>--+--<` );
    }
    return rules;
}

function getSassRule( options ) {
    // TODO Work with `.sass` files
    // test: [ /\.sass$/, /\.scss$/ ],
    // test: /\.(sass|scss)$/,
    // test: /\.sass$/,
    const test = /\.scss$/;

    // Configurations for individual loaders
    const cssLoader = {
        loader: require.resolve( 'css-loader' ),
        options: { importLoaders: 2 }
    };
    const postCssLoader = {
        loader: require.resolve( 'postcss-loader' ),
        options: {
            plugins: []
            // plugins: [ require.resolve( 'autoprefixer') ]
        }
    };
    const sassLoader = {
        loader: require.resolve( 'sass-loader' )
    };

    // Rules for different modes
    const buildRule = {
        test: test,
        loader: ExtractTextPlugin.extract( {
            fallback: {
                loader: require.resolve( 'style-loader' ),
                options: {
                    hmr: false,
                },
            },
            use: [
                cssLoader,
                postCssLoader,
                sassLoader
            ]
        } )
    };
    const devServerRule = {
        test: test,
        use: [
            {
                loader: require.resolve( 'style-loader' )
            },
            cssLoader,
            postCssLoader,
            sassLoader
        ]
    };

    return options.mode === 'dev-server' ? devServerRule : buildRule ;
}

module.exports = {
    getRules,
    names
};
