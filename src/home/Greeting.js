import PropTypes from 'prop-types';
import React from 'react';

const greetingStyle = {
    fontSize: '1.75rem',
    fontWeight: 300,
    lineHeight: 1.2
};

class Greeting extends React.PureComponent {
    static propTypes = {
        incompleteCount: PropTypes.number.isRequired
    };

    constructor() {
        super();
    }

    render() {
        return (
            <div className={ 'row mt-3' }>
                <div className={ 'col' } style={ greetingStyle }>
                    Howdy! You have { this.props.incompleteCount } incomplete items.
                </div>
            </div>
        );
    }
}

export default Greeting;
