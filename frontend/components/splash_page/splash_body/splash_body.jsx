import React from 'react';
import { Route } from 'react-router-dom';

import CTAContainer from './cta/cta_container';
import SplashArtContainer from './splash_art/splash_art_container';

class SplashBody extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div 
        className="splash-body">
          <Route exact path="/" component={CTAContainer} />
          <Route exact path="/" component={SplashArtContainer} />
      </div>
    )
  }
}

export default SplashBody