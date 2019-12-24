import React from 'react';

class FooterCTA extends React.Component {
  constructor(props) {
    super(props)
    this.visitSignup = this.visitSignup.bind(this)
    this.openButton = this.openButton.bind(this)
  }

  visitSignup (e) {
    e.preventDefault();
    this.props.history.push("/signup");
  }

  openButton(e) {
    e.preventDefault()
    this.props.history.push("/channels/@me");
  }

  render() {
    let buttonRendered = undefined
    if (this.props.currentUser) {
      buttonRendered = (
      <button
        onClick={this.openButton}
        className="cta-button">
        Open Strife
      </button>
      )
    } else {
      buttonRendered = (
        <button
          onClick={this.visitSignup}
          className="footer-cta-button">
          Sign Up Now
        </button>
      )
    }

    

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
              {buttonRendered}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FooterCTA