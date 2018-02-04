import PropTypes from 'prop-types';
import React from 'react';
import Task from '../task/Task';

class TaskList extends React.PureComponent {
    static propTypes = {
        tasks: PropTypes.array.isRequired,
        toggleTaskStatus: PropTypes.func.isRequired
    };

    constructor() {
        super();
    }

    render() {
        const taskComponents = this.props.tasks
            .map( task => <Task key={ task.id } completed={ task.completed } title={ task.title } /> );

        return (
            <ul>
                { taskComponents }
            </ul>
        );
    }
}

export default TaskList;
