import PropTypes from 'prop-types';
import React from 'react';

class Greeting extends React.PureComponent {
    static propTypes = {
        incompleteCount: PropTypes.number.isRequired
    };

    constructor() {
        super();
    }

    render() {
        return (
            <h2>Howdy! You have { this.props.incompleteCount } incomplete items.</h2>
        );
    }
}

export default Greeting;
