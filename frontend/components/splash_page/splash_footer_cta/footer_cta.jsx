import React from 'react';

class FooterCTA extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="splash-footer-cta-container cta-index-push">
        <div><hr className="footer-cta-hr" /></div>

        <div className="splash-footer-cta-wrapper">
          <div className="splash-footer-cta cta-index-push">

            <div>
              <h3>Ready to try Discord? It's free!</h3>
              <small className="footer-cta-small-text">JOIN OVER 250 MILLION PLAYERS TODAY</small>
          </div>
            <div className="splash-footer-cta-button-div">
              <button className="footer-cta-button">Sign Up Now</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FooterCTA