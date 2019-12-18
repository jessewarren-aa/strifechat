import React from 'react';
import { Route } from 'react-router-dom';
import SplashBodyContainer from './splash_body/splash_body_container';
import SplashNavContainer from './splash_nav/splash_nav_container';
import SplashFooterContainer from './splash_footer/splash_footer_container';
import FooterCTAContainer from './splash_footer_cta/footer_cta_container';

class SplashPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render () {
    return <div className="splash-page-master">
      <Route exact path="/" component={SplashNavContainer} />
      <Route exact path="/" component={SplashBodyContainer} />
      <Route exact path="/" component={SplashFooterContainer} />
      <Route exact path="/" component={FooterCTAContainer} />
    </div>
  }
}

export default SplashPage