import _ from 'lodash';
import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import Greeting from './home/Greeting';
import Header from './home/Header';
import TaskList from './task-list/TaskList';
import './global/icons';
import './stylesheets/app.sass';

// TODO Make this into a simple "to do" app, based on [Scotch.io tutorial][1] ([source code][2]).
// [1]: https://scotch.io/tutorials/create-a-simple-to-do-app-with-react
// [2]: https://github.com/christiannwamba/scotch-react-todo
// TODO Add some skeletons for React testing with Mocha
// TODO Then make it into a more complex template with Redux and React Router
// TODO Add some automated tests that will run the 3 different build configurations and make sure that each is working correctly.


function getIncompleteCount( list ) {
    return list
        .filter( task => !task.completed )
        .length;
}

class App extends React.PureComponent {
    constructor() {
        super();
        this.state = {
            tasks: [
                {
                    id: 0,
                    title: 'Get some milk',
                    completed: false
                },
                {
                    id: 1,
                    title: 'Pay the bills',
                    completed: false
                },
                {
                    id: 2,
                    title: 'File the tax return',
                    completed: false
                },
                {
                    id: 3,
                    title: 'Call the doctor',
                    completed: false
                }
            ]
        };
        this.toggleComplete = this.toggleComplete.bind( this );
    }

    toggleComplete( taskId ) {
        const newTaskList = _.cloneDeep( this.state.tasks );
        const task = newTaskList[ taskId ];
        task.completed = !task.completed;
        newTaskList[ taskId ] = task;
        this.setState( { tasks: newTaskList } );
    }

    render() {
        const incompleteCount = getIncompleteCount( this.state.tasks );
        return (
            <div className={ 'container' }>
                <Header />
                <Greeting incompleteCount={ incompleteCount } />
                <TaskList tasks={ this.state.tasks } toggleTaskStatus={ this.toggleComplete } />
            </div>
        );
    }
}

export default App;
