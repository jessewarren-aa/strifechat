import React from 'react';

class SplashNav extends React.Component {
  constructor(props) {
    super(props)
    this.sendToLogin = this.sendToLogin.bind(this)

    this.headHome = this.headHome.bind(this)
  }

  headHome(e) {
    e.preventDefault();
    this.props.history.push("/");
    // return <Redirect to="/"/>
  }

  sendToLogin (e) {
    e.preventDefault()
    if (this.props.currentUser) {
      this.props.history.push("/channels/@me") 
    } else {
      this.props.history.push("/login") 
    }
  }

  changeToEnglish (e) {
    e.preventDefault()
    console.log("Language changed from English to English.")
  }

  render() {
    return (    
      <div 
        className="splash-nav">

        <div 
          className="splash-nav-left marginify">

          <div 
            className="logo-font splash-logo marginify">
            <a
              href="#"
              onClick={this.headHome}>
              <img
                className="logo-sizer"
                src={window.logoImageUrl} />
            </a>
            &nbsp;&nbsp;
            <button 
              className="splash-logo-size not-a-link">
                STRIFE
            </button>
          </div>

          <div 
            className="marginify nav-left-download nav-item">
              Download
          </div>

          <div 
            className="marginify nav-left-nitro nav-item">
              Nitro
          </div>

          <div 
            className="marginify nav-left-jobs nav-item">
              Jobs
          </div>

          <div 
            className="marginify nav-left-developers nav-left-developers-hide nav-item">
            <div className="splash-nav-developers-dropdown">
              Developers&nbsp;<span className="caret"></span>
              <div className="splash-nav-developers-dropdown-content">
                <div>Sell Your Game</div>
                <div>Rich Presence</div>
                <div>Verification</div>
                <div>Developer Portal</div>
                <div>Documentation</div>
              </div>
            </div>
          </div>

          <div 
            className="marginify nav-left-community nav-left-community-hide nav-item">
            <div className="splash-nav-community-dropdown">
              Community&nbsp;<span className="caret"></span>
              <div className="splash-nav-community-dropdown-content">
                <div>Open Source</div>
                <div>Partners</div>
                <div>Hype Squad</div>
                <div>Guidelines</div>
              </div>
            </div>
          </div>

          <div 
            className="marginify nav-left-support nav-left-support-hide nav-item">
            <div className="splash-nav-support-dropdown">
              Support&nbsp;<span className="caret"></span>
              <div className="splash-nav-support-dropdown-content">
                <div>Help & Support</div>
                <div>Status</div>
                <div>Parent's Guide</div>
                <div>Security</div>
              </div>
            </div>
          </div>
        </div>

        <div className="splash-nav-right nav-right-item marginify">
          <a href="">
            <img
              className="icon-sizer nav-item nav-right-item marginify"
              src={window.twitterIcon} />
          </a>
          
          <a href="">
            <img
              className="icon-sizer nav-item nav-right-item marginify"
              src={window.facebookIcon} />
          </a>
          
          <a href="">
            <img
              className="icon-sizer nav-item nav-right-item marginify"
              src={window.instagramIcon} />
          </a>

          <button
            className="splash-nav-login-button nav-right-item marginify nav-item"
            onClick={this.sendToLogin}>
            <small>{this.props.currentUser ? "Open" : "Login"}</small>
          </button>

          <div className="splash-vl nav-right-item"></div>

          <button
            className="splash-nav-language-button nav-right-item marginify nav-item"
            onClick={this.changeToEnglish}>
            <small>English</small>
          </button>
        </div>
      </div>
    )
  }
}

export default SplashNav