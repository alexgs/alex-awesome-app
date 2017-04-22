const path = require( 'path' );

function buildConfig() {
    const configFile = ( process.env.npm_lifecycle_event === 'start' )
        ? 'dev-server' : process.env[ 'NODE_ENV' ];
    const options = {
        nodeEnv: process.env[ 'NODE_ENV' ],
        outputPath: path.resolve( __dirname, './dist' ),
        publicPath: ''
    };
    return require( `./config/webpack.${configFile}.js` )( options )
}

module.exports = buildConfig;
