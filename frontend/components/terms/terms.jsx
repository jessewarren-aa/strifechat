import React from 'react';
import SplashNavContainer from '../splash_page/splash_nav/splash_nav_container';
import FooterLeftContainer from '../splash_page/splash_footer/footer_left/footer_right_container'
import FooterRightContainer from '../splash_page/splash_footer/footer_right/footer_right_container'
import FooterCTAContainer from '../splash_page/splash_footer_cta/footer_cta_container';

class Terms extends React.Component {
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

          <div className="legal-header">STRIFECHAT TERMS OF SERVICE</div>
          <div className="legal-text">
            Last Modified: December 30th, 2019
          </div>
          <div className="legal-text">
            IMPORTANT NOTICE: THESE TERMS OF SERVICE PROBABLY CONTAIN LEGAL JARGON
          </div>

          <div className="legal-header">
            INTRODUCTION AND ACCEPTING THE TERMS
          </div>
          <div className="legal-text">
            You accept these terms if you continue to use StrifeChat, especially after changes.
          </div>

          <div className="legal-header">
            RIGHTS TO USE THE SERVICE
          </div>
          <div className="legal-text">
            You can use it as long as you're polite and respectful.
          </div>

          <div className="legal-header">
            YOUR ACCOUNT
          </div>
          <div className="legal-text">
            Your account can be destroyed without notice, we like to reset the database every so often.
          </div>

          <div className="legal-header">
            RULES OF CONDUCT AND USAGE
          </div>
          <div className="legal-text">
            Behave! Don't do anything a law-abiding, god-fearing citizen wouldn't do.
          </div>

          <div className="legal-header">
            FEEDBACK
          </div>
          <div className="legal-text">
            Got feedback? Get in line 
            (and then tell the developer by <a 
                href="https://twitter.com/jesse__warren" 
                target="_blank">tweeting at him
              </a>).
          </div>

          <div className="legal-header">
            TERMINATION
          </div>
          <div className="legal-text">
            No really, your account might just be deleted randomly.
          </div>

          <div className="legal-header">
            DISCLAIMER OF WARRANTY
          </div>
          <div className="legal-text">
            THE SERVICES AND THE SERVICE MATERIALS ARE PROVIDED "AS IS" AND “AS AVAILABLE” WITHOUT WARRANTIES OF ANY KIND, BLAH BLAH BLAH
          </div>

          <div className="legal-header">
            LIMITATION OF LIABILITY
          </div>
          <div className="legal-text">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT WILL THE COMPANY, BE LIABLE TO YOU OR TO ANY THIRD PERSON FOR ANY CONSEQUENTIAL, INCIDENTAL, SPECIAL, PUNITIVE OR OTHER INDIRECT DAMAGES, YADA YADA
          </div>

          <div className="legal-header">
            INDEMNIFICATION
          </div>
          <div className="legal-text">
            You agree to indemnify and hold the Company, harmless from and against any loss, etc., etc.
          </div>

          <div className="legal-header">
            GENERAL
          </div>
          <div className="legal-text">
            <strong>Survival</strong>. You agree that the provisions of these Terms that by their nature should survive termination will survive any termination of these Terms.
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

export default Terms