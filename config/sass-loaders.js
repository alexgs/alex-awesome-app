const autoprefixer = require( 'autoprefixer' );

module.exports = [
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
            plugins: [ autoprefixer ]
        }
    },

    {
        loader: require.resolve( 'sass-loader' )
    }
];
