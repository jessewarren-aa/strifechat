import React from 'react';
import { Route } from 'react-router-dom';
import FooterCTAContainer from './splash_footer_cta/footer_cta_container';

class SplashFooter extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div>
      Hey, I'm the splash footer! Hello!
      <Route exact path="/" component={FooterCTAContainer} />
    </div>
  }
}

export default SplashFooter