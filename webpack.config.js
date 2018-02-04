const path = require( 'path' );

function buildConfig() {
    const devServer = process.env.npm_lifecycle_event === 'start';
    const mode = devServer ? 'dev-server' : process.env[ 'NODE_ENV' ];
    const options = {
        mode: mode,
        nodeEnv: process.env[ 'NODE_ENV' ],
        outputPath: path.resolve( __dirname, './build' ),
        print: { rules: false },
        publicPath: '',
        rootPath: path.resolve( __dirname )
    };
    return require( `./config/webpack.${mode}.js` )( options );
}

module.exports = buildConfig;
