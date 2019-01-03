import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { hot } from 'react-hot-loader/root';

import './Global/icons';
import './stylesheets/app.sass';

// TODO Add production build configuration
class App extends React.Component {
  render() {
    return (
      <main role="main" className="container py-4">
        <h1>Bootstrap grid examples</h1>
        <p className="lead">
          Basic grid layouts to get you familiar with building within the Bootstrap grid system.
        </p>
        <div className="row mb-3">
          <div className="col-4">
            Light coffee: <FontAwesomeIcon icon={['fal', 'coffee']} />
          </div>
          <div className="col-4">
            Regular coffee: <FontAwesomeIcon icon={['far', 'coffee']} />
          </div>
          <div className="col-4">
            Solid coffee: <FontAwesomeIcon icon={['fas', 'coffee']} />
          </div>
          <div className="col-4">
            Twitter: <FontAwesomeIcon icon={['fab', 'twitter']} />
          </div>
        </div>
      </main>
    );
  }
}

export default hot(App);
