import React from 'react';

class SplashNav extends React.Component {
  constructor(props) {
    super(props)
    this.sendToLogin = this.sendToLogin.bind(this)
  }

  sendToLogin (e) {
    e.preventDefault()
    this.props.history.push("/login") 
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
            <img 
              className="logo-sizer" 
              src={window.logoImageUrl} />
            &nbsp;&nbsp;
            <span 
              className="splash-logo-size">
                STRIFE
            </span>
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
            className="marginify nav-left-developer nav-item">
              Developers&nbsp;<span className="caret"></span>
          </div>

          <div 
            className="marginify nav-left-community nav-item">
              Community&nbsp;<span className="caret"></span>
          </div>

          <div 
            className="marginify nav-left-support nav-item">
              Support&nbsp;<span className="caret"></span>
          </div>
        </div>

        <div className="splash-nav-right marginify">
          <a href="">
            <img
              className="icon-sizer nav-item marginify"
              src={window.twitterIcon} />
          </a>
          
          <a href="">
            <img
              className="icon-sizer nav-item marginify"
              src={window.facebookIcon} />
          </a>
          
          <a href="">
            <img
              className="icon-sizer nav-item marginify"
              src={window.instagramIcon} />
          </a>

          <button
            className="splash-nav-login-button marginify nav-item"
            onClick={this.sendToLogin}>
              <small>Login</small>
          </button>

          <div className="splash-vl"></div>

          <button
            className="splash-nav-dyslexic-button marginify nav-item"
            onClick={this.changeToEnglish}>
            <small>English</small>
          </button>
        </div>
      </div>
    )
  }
}

export default SplashNav