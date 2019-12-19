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
            className="marginify nav-left-developers nav-item">
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
              <small>Login</small>
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