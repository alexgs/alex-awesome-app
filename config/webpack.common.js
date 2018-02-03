const autoprefixer = require( 'autoprefixer' );
const ExtractTextPlugin = require( 'extract-text-webpack-plugin' );
const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const path = require( 'path' );
const sassLoaders = require( './sass-loaders' );

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
            // Rules are adapted from "Create React App"
            rules: [
                { oneOf: [
                {
                    test: [ /\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/ ],
                    loader: require.resolve( 'url-loader' ),
                    options: {
                        limit: 10000,
                        name: 'media/[name].[hash:8].[ext]'
                    }
                },

                {
                    test: /\.(js|jsx)$/,
                    include: path.resolve( options.rootPath, './src' ),
                    loader: require.resolve( 'babel-loader' ),
                    options: {
                        cacheDirectory: true
                    }
                },

                /**
                 * The "ExtractTextPlugin" doesn't work with HMR, and disabling it via its
                 * `disable` option doesn't appear to work. I came up with this configuration
                 * as a work-around.
                 */
                // options.extractCss ? {      // TODO Can this be simplified?
                //     test: [ /\.sass$/, /\.scss$/ ],
                //     use: ExtractTextPlugin.extract( {
                //         fallback: {
                //             loader: require.resolve( 'style-loader' ),
                //             options: {
                //                 hmr: false,
                //             },
                //         },
                //         use: sassLoaders
                //     } )
                // } : { },

                // { },

                {
                    // TODO Work with `.sass` files
                    // test: [ /\.sass$/, /\.scss$/ ],
                    // test: /\.(sass|scss)$/,
                    test: /\.scss$/,
                    // test: /\.sass$/,
                    loader: ExtractTextPlugin.extract( {
                        fallback: {
                            loader: require.resolve( 'style-loader' ),
                            options: {
                                hmr: false,
                            },
                        },
                        // use: sassLoaders
                        use: [
                            // {
                            //     loader: require.resolve( 'style-loader' )
                            // },

                            {
                                loader: require.resolve( 'css-loader' ),
                                options: { importLoaders: 2 }
                                // options: { importLoaders: 0 }
                            },

                            {
                                loader: require.resolve( 'postcss-loader' ),
                                options: {
                                    // exec: true,
                                    plugins: [ autoprefixer() ]
                                }
                            },

                            {
                                loader: require.resolve( 'sass-loader' )
                            }
                        ]
                    } )
                },

                {
                    loader: require.resolve( 'file-loader' ),
                    exclude: [ /\.(js|jsx|mjs)$/, /\.html$/, /\.json$/ ],
                    options: {
                        name: '[name].[hash:8].[ext]',
                    },
                }
            ] }
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
                filename: '[name].[hash:8].css',
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
