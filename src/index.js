import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

// TODO As of 2019-01-03, the `npm start` script does not work due to recent package upgrades
ReactDom.render(
    <App />,
    document.getElementById( 'app-root' )
);
