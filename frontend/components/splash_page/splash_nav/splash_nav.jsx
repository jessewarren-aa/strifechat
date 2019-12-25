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
            className="marginify nav-left-download nav-item disabled">
              Download
          </div>

          <div 
            className="marginify nav-left-nitro nav-item disabled">
              Nitro
          </div>

          <div 
            className="marginify nav-left-jobs nav-item disabled">
              Jobs
          </div>

          <div 
            className="marginify nav-left-developers nav-left-developers-hide nav-item">
            <div className="splash-nav-developers-dropdown">
              Developers&nbsp;<span className="caret"></span>
              <div className="splash-nav-developers-dropdown-content">
                <div className="disabled">Sell Your Game</div>
                <div className="disabled">Rich Presence</div>
                <div className="disabled">Verification</div>
                <div className="disabled">Developer Portal</div>
                <div className="disabled">Documentation</div>
              </div>
            </div>
          </div>

          <div 
            className="marginify nav-left-community nav-left-community-hide nav-item">
            <div className="splash-nav-community-dropdown">
              Community&nbsp;<span className="caret"></span>
              <div className="splash-nav-community-dropdown-content">
                <div className="disabled">Open Source</div>
                <div className="disabled">Partners</div>
                <div className="disabled">Hype Squad</div>
                <div className="disabled">Guidelines</div>
              </div>
            </div>
          </div>

          <div 
            className="marginify nav-left-support nav-left-support-hide nav-item">
            <div className="splash-nav-support-dropdown">
              Support&nbsp;<span className="caret"></span>
              <div className="splash-nav-support-dropdown-content">
                <div className="disabled">Help & Support</div>
                <div className="disabled">Status</div>
                <div className="disabled">Parent's Guide</div>
                <div className="disabled">Security</div>
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