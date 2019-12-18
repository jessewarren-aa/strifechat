import React from 'react';
import { Link } from "react-router-dom";

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.setBounceOut = this.setBounceOut.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
      .then(() => this.props.history.push("/"))
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  setBounceOut (e) {
    const redirectURL = this.props.formType === "login" ? "/signup" : "/login"
    e.preventDefault()
    $(".session-form-landing").removeClass("bounceIn")
    $(".session-form-landing").addClass("bounceOut") 
    setTimeout(() => {
      $(".session-form-landing").addClass("hidden") 
    }, 700);
    setTimeout(() => { 
      console.log('HEY WHOA THERE BUDDY')
      this.props.history.push(redirectURL) 
    }, 1200);
  }

  render() {
    const lowerMargin = {
      marginTop: '120px',
    };

    const redirectURL = this.props.formType === "login" ? "/signup" : "/login";
    const verbiage = this.props.formType === "signup" ? "Already have an account?" : "Register";
    return (
      <div className="row session-form-background">
        <div className={this.props.formType === "signup" ? "col-md-4" : "col-md-2"}>
          <div className="row">
            <div className={this.props.formType === "signup" ? "col-md-6" : "col-md-12"}>
              <div className="session-form-logo logo-font">
                <img className="logo-sizer shadowed" src={window.logoImageUrl}></img>&nbsp;&nbsp;STRIFE
                <img className="logo-sizer shadowed" src={window.backgroundImageUrl}></img>
                <img className="logo-sizer shadowed" src={window.discordQRCodeUrl}></img>
              </div>
            </div>
            <div className={this.props.formType === "signup" ? "col-md-6" : "col-md-0"}></div>
          </div>
        </div>
        <div className={this.props.formType === "signup" ? "col-md-4 session-form-landing animate bounceIn" : "col-md-8 session-form-landing animate bounceIn"} style={this.props.formType === "signup" ? lowerMargin : {}}>
          <div className="row">
            <div className={this.props.formType === "signup" ? "col-md-12" : "col-md-7"}>

              <div className="text-center registration-header">
                <div>
                  {{ "Register": "Welcome back!", "Already have an account?": "Create an account" }[verbiage]}
                </div>
                <div className="login-smaller-header">
                  {{ "Register": "We're so excited to see you again!" }[verbiage]}
                </div>
                
                <ul>
                  {this.props.errors.map((error, i) => <li key={i}>{error}</li>)}
                </ul>
              </div>
              <div className="session-form-form">
                <form onSubmit={this.handleSubmit}>
                  <div className="row">
                    <div className="col-md-12">
                      <div className="row">
                        <div className="col-md-12">
                          <small>EMAIL</small>
                          <label className="input-flex-grow">
                            <input
                              className="session-form-input"
                              type="text"
                              value={this.state.email}
                              onChange={this.handleInput("email")}
                            />
                          </label>
                        </div>
                      </div>

                      <div className={this.props.formType === "signup" ? "row" : "row hidden"}>
                        <div className="col-md-12">
                          <small>USERNAME</small>
                          <label className="input-flex-grow">
                            <input
                              className="session-form-input"
                              type="text"
                              value={this.state.username}
                              onChange={this.handleInput("username")}
                            />
                          </label>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-md-12">
                          <small>PASSWORD</small>
                          <label className="input-flex-grow">
                            <input
                              className="session-form-input"
                              type="password"
                              value={this.state.password}
                              onChange={this.handleInput("password")}
                            />
                          </label>
                          <div className="session-form-forgot-password">
                            <small>
                              <Link to="">{{ "Register": "Forgot your password?" }[verbiage]}</Link>
                            </small>
                          </div>
                        </div>
                        
                      </div>

                      <div className="row">
                        <div className="col-md-12">
                          <button className="session-form-button" onClick={this.handleSubmit}>
                            {this.props.formType === "signup" ? "Continue" : "Login"}
                          </button>
                        </div>
                      </div>
                    </div>   
                  </div> { /* end of form row */}
                </form>
              </div>
              <div>
                <small>{{ "Register": "Need an account? " }[verbiage]}<Link onClick={this.setBounceOut} to={redirectURL}>{verbiage}</Link></small>
              </div>
              <div>
                <div className={this.props.formType === "signup" ? "session-form-disclaimer" : "session-form-disclaimer hidden"}><small>By registering, you agree to Strife's <Link to="">Terms of Service</Link> and <Link to="">Privacy Policy</Link>.</small></div>
              </div>
            </div> { /* end of inner session-form-landing column */ }
            <div className={this.props.formType === "signup" ? "hidden" : "col-md-5"}>
              
              <div className="session-form-qr-code-col">
                <div className="vl"></div>
                <div>
                  <div className="session-form-qr-code-section">
                    <div className="session-form-qr-code">
                      
                    </div>
                    <div className="text-center session-form-qr-code-text">
                      <h3>Log in with QR Code</h3>
                      <small>Scan this with your camera to visit the real website.</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> { /* end of session-form-landing row */}
        <div className={this.props.formType === "signup" ? "col-md-4" : "col-md-2"}></div>

        { /* end of session-form-background row */ }
      </div>
    );
  }
}

export default SessionForm;


