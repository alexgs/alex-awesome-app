import React from 'react';

class Header extends React.PureComponent {
    render() {
        return (
            <div>
                <h1>Phil's Awesome App</h1>
                <div>
                    { 'Adapted from ' }
                    <a href={ 'https://scotch.io/tutorials/create-a-simple-to-do-app-with-react' }>
                        "Create a Simple To-Do App With React"
                    </a>
                    { ' by ' }
                    <a href={ 'https://twitter.com/codebeast' }>Chris Nwamba</a>
                    .
                </div>
            </div>
        );
    }
}

export default Header;
