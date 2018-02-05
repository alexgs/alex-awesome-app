import React from 'react';

const subtitleStyle = {
    fontSize: '87.5%'       // Convert Bootstrap standard 16px font to 14px
};

class Header extends React.PureComponent {
    render() {
        return (
            <div className={ 'row align-items-end' }>
                <h1 className={ 'col-md mb-0' }>Phil's Awesome App</h1>
                <div className={ 'col-md-5 ml-auto text-muted' } style={ subtitleStyle }>
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
