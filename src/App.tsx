import React from 'react';
import { hot } from 'react-hot-loader/root';

// import './global/icons';
import './stylesheets/app.sass';

// TODO Add Bootstrap and FontAwesome
// TODO Add production build configuration
class App extends React.Component {
  render() {
    return (
      <main role="main" className="container py-4">
        <div className="starter-template">
          <h1>Bootstrap grid examples</h1>
          <p className="lead">
            Basic grid layouts to get you familiar with building within the Bootstrap grid system.
          </p>
          <div className="row mb-3">
            <div className="col-4">.col-4</div>
            <div className="col-4">.col-4</div>
            <div className="col-4">.col-4</div>
          </div>
        </div>
      </main>
    );
  }
}

export default hot(App);
