import PropTypes from 'prop-types';
import React from 'react';

class Task extends React.PureComponent {
    static propTypes = {
        completed: PropTypes.bool.isRequired,
        title: PropTypes.string.isRequired
    };

    constructor() {
        super();
    }

    render() {
        const { completed, title } = this.props;
        return (
            <li>Title: { title }<br/>Completed: { String( completed ) }</li>
        );
    }
}

export default Task;
