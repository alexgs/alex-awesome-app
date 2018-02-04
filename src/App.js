import React from 'react';

import './stylesheets/app.scss';

class App extends React.PureComponent {
    // TODO Make this into a simple "to do" app, based on [Scotch.io tutorial][1] ([source code][2]).
    // [1]: https://scotch.io/tutorials/create-a-simple-to-do-app-with-react
    // [2]: https://github.com/christiannwamba/scotch-react-todo
    // TODO Add some skeletons for React testing with Mocha
    // TODO Then make it into a more complex template with Redux and React Router
    // TODO Add some automated tests that will run the 3 different build configurations and make sure that each is working correctly.
    render() {
        return (
            <div>
                <h1>Hello Awesome World!</h1>
                <pre>This is monospaced text.</pre>
            </div>
        );
    }
}

export default App;
