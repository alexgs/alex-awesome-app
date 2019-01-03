import React from 'react';
import { hot } from 'react-hot-loader/root';

const App = () => (
    <div>
      <h1>Hello happy world!</ h1>
    </div>
  );

(async () => {
  console.log('You have async support if you read this instead of "ReferenceError: '
    + 'regeneratorRuntime is not defined" error.');
})();

export default hot(App);
