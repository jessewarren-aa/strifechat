import React from 'react';
import { Route } from 'react-router-dom';

import BoxMagicContainer from './box_magic/box_magic_container';
import GearArtContainer from './gear_art/gear_art_container';

class SplashArt extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div 
        className="splash-art marginify">
        <Route exact path="/" component={BoxMagicContainer} />
        <Route exact path="/" component={GearArtContainer} />
      </div>
    )
  }
}

export default SplashArt