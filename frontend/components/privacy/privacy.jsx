import React from 'react';
import SplashNavContainer from '../splash_page/splash_nav/splash_nav_container';
import FooterLeftContainer from '../splash_page/splash_footer/footer_left/footer_right_container'
import FooterRightContainer from '../splash_page/splash_footer/footer_right/footer_right_container'
import FooterCTAContainer from '../splash_page/splash_footer_cta/footer_cta_container';

class Privacy extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div className="splash-page-master ">
          <SplashNavContainer />
          <div
            className="logo-font terms-and-privacy-logo terms-and-privacy-header">
            <a
              href="#"
              onClick={this.headHome}>
              <img
                className="logo-sizer-full"
                src={window.logoImageUrl} />
            </a>
            &nbsp;&nbsp;
            <button
              className="splash-logo-size-full not-a-link">
              STRIFE
            </button>
          </div>
        </div>
        <div className="legal-body">

          <div className="legal-header">STRIFECHAT PRIVACY POLICY</div>
          <div className="legal-text">
            Last Modified: December 30th, 2019
          </div>

          <div className="legal-header">
            INFORMATION WE COLLECT
          </div>
          <div className="legal-text">
            Basically nothing, besides your activity on StrifeChat.
          </div>

          <div className="legal-header">
            OUR DISCLOSURE OF YOUR INFORMATION
          </div>
          <div className="legal-text">
            We don't disclose your info, unless you did something bad and a nice cop asks us to.
          </div>

          <div className="legal-header">
            SECURITY
          </div>
          <div className="legal-text">
            We tried, okay? If you can do something you're not supposed to, let us know and we'll credit you.
          </div>
        </div>
        <div className="splash-page-master background-color">
          <div className="cta-footer-wrapper">
            <div className="cta-footer-container cta-index-push row">
              <FooterLeftContainer />
              <FooterRightContainer />
            </div>
          </div>
          <FooterCTAContainer />
        </div>
      </div>
    )
  }


}

export default Privacy