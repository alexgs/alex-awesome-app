import React from 'react';
import Greeting from './components/Greeting';
import './stylesheets/app.sass';

// TODO Make this into a simple "to do" app, based on [Scotch.io tutorial][1] ([source code][2]).
// [1]: https://scotch.io/tutorials/create-a-simple-to-do-app-with-react
// [2]: https://github.com/christiannwamba/scotch-react-todo
// TODO Add some skeletons for React testing with Mocha
// TODO Then make it into a more complex template with Redux and React Router
// TODO Add some automated tests that will run the 3 different build configurations and make sure that each is working correctly.

class App extends React.PureComponent {
    render() {
        return (
            <div>
                <div>
                    <h1>Phil's Awesome App</h1>
                    <div>
                        Adapted from <a href={ 'https://scotch.io/tutorials/create-a-simple-to-do-app-with-react' }>
                            "Create a Simple To-Do App With React"
                        </a> by <a href={ 'https://twitter.com/codebeast' }>Chris Nwamba</a>
                    </div>
                </div>
                <div>
                    <Greeting incompleteCount={ 4 } />
                </div>
            </div>
        );
    }
}

export default App;
