import React from 'react';
import { Route } from 'react-router-dom';

import FooterLeftContainer from './footer_left/footer_right_container'
import FooterRightContainer from './footer_right/footer_right_container'


class SplashFooter extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="cta-footer-wrapper">
        <div className="cta-footer-container cta-index-push row">
          <Route exact path="/" component={FooterLeftContainer} />
          <Route exact path="/" component={FooterRightContainer} />
        </div>
      </div>
    )
  }
}

export default SplashFooter