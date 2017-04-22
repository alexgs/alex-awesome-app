function buildConfig( nodeEnv ) {
    const options = {
        nodeEnv: nodeEnv,
        publicPath: ''
    };
    return require( `./config/webpack.${nodeEnv}.js` )( options )
}

module.exports = buildConfig;
