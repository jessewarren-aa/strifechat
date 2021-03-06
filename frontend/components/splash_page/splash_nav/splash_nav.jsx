import React from 'react';
import { Link } from "react-router-dom";

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
            <Link to="/">
              <img
                className="logo-sizer"
                src={window.logoImageUrl} />
            </Link>
            &nbsp;&nbsp;
            <button 
              className="splash-logo-size not-a-link">
                STRIFE
            </button>
          </div>

          {/* <div 
            className="marginify nav-left-jobs nav-item disabled">
              Jobs
          </div> */}

          <div 
            className="marginify nav-left-developers nav-left-developers-hide nav-item">
            <div className="splash-nav-developers-dropdown">
              Developer&nbsp;<span className="caret"></span>
              <div className="splash-nav-developers-dropdown-content">
                <div>
                  <a href="https://jesse-warren.github.io/" target="_blank">
                    About
                  </a>
                </div>
                <div>
                  <a href="https://github.com/jesse-warren" target="_blank">
                    Github
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="splash-nav-right nav-right-item marginify">
          <a href="https://twitter.com/jesse__warren" target="_blank">
            <img
              className="nav-item nav-right-item marginify"
              src={window.twitterIcon} />
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