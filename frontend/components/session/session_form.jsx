import React from 'react';
import { Link, Redirect } from "react-router-dom";
import {omit} from 'lodash'

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
    this.handleGuest = this.handleGuest.bind(this);
    this.headHome = this.headHome.bind(this);
  }


  handleGuest(e) {
    e.preventDefault()
    this.state = {
      username: "Guest Account",
      email: "guest@strifechat.herokupapp.com",
      password: "password"
    }

    $("#session-form-email-input").val(this.state.email)
    $("#session-form-username-input").val(this.state.username)
    $("#session-form-password-input").val(this.state.password)

    setTimeout(() => {
      this.handleSubmit(e)
    }, 400);
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user)
      .then(() => this.props.history.push("/channels/@me"))
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  headHome(e) {
    e.preventDefault();
    this.props.history.push("/");
    // return <Redirect to="/"/>
  }

  setBounceOut (e) {
    Object.keys(this.props.errors).forEach(key => {
      this.props.errors[key] = []
    })

    const redirectURL = this.props.formType === "login" ? "/signup" : "/login"
    e.preventDefault()
    $(".session-form-landing").removeClass("bounceIn")
    $(".session-form-landing").addClass("bounceOut") 
    setTimeout(() => {
      $(".session-form-landing").addClass("hidden") 
    }, 700);
    setTimeout(() => { 
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

        <div className={this.props.formType === "signup" ? "col-lg-4" : "col-lg-2"}>
          <div className="row">
            <div className={this.props.formType === "signup" ? "col-lg-4" : "col-lg-8"}>
              <div className="session-form-logo logo-font">

                  <img
                    className="logo-sizer shadowed"
                    src={window.logoImageUrl}>
                  </img>&nbsp;&nbsp;
                    <button className="not-a-link" onClick={this.headHome}>
                      <span className="logo-text">
                        STRIFE
                      </span>
                    </button>
                  
              </div>
            </div>
            <div className={this.props.formType === "signup" ? "col-lg-8" : "col-lg-0"}></div>
          </div>
        </div>
        <div className={this.props.formType === "signup" ? "col-lg-4 session-form-landing animate bounceIn" : "col-lg-8 session-form-landing animate bounceIn"} style={this.props.formType === "signup" ? lowerMargin : {}}>
          <div className="row">
            <div className={this.props.formType === "signup" ? "col-lg-12" : "col-lg-7"}>

              <div className="text-center registration-header">
                <div>
                  {{ "Register": "Welcome back!", "Already have an account?": "Create an account" }[verbiage]}
                </div>
                <div className="login-smaller-header">
                  {{ "Register": "We're so excited to see you again!" }[verbiage]}
                </div>

                
                
                
              </div>
              <div className="session-form-form">
                <form onSubmit={this.handleSubmit}>
                  <div className="row">
                    <div className="col-lg-12">
                      <div className="row">
                        <div className="col-lg-12">
                          <small>EMAIL</small>
                          <label className="input-flex-grow">
                            <input
                              id="session-form-email-input"
                              className="session-form-input"
                              type="text"
                              value={this.state.email}
                              onChange={this.handleInput("email")}
                            />
                          </label>
                        </div>
                      </div>

                      <div className={this.props.formType === "signup" ? "" : "hidden"}>
                        <div className="row">
                          <div className="col-lg-12">
                            <small>USERNAME</small>
                            <label className="input-flex-grow">
                              <input
                                id="session-form-username-input"
                                className="session-form-input"
                                type="text"
                                value={this.state.username}
                                onChange={this.handleInput("username")}
                              />
                            </label>
                          </div>
                        </div>
                      </div>

                      <div className="row">
                        <div className="col-lg-12">
                          <small>PASSWORD</small>
                          <label className="input-flex-grow">
                            <input
                              id="session-form-password-input"
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

                      <div className="session-form-errors">
                        <small>
                          <ul>
                            {this.props.errors.map((error, i) => <li key={i}>{error}</li>)}
                          </ul>
                        </small>
                      </div>

                      <div className="row">
                        <div className="col-lg-12">
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
                <small>{{ "Register": "Need an account? " }[verbiage]}<Link onClick={this.setBounceOut} to={redirectURL}>{verbiage}</Link> <span className={this.props.formType === "signup" ? "hidden" : ""}>or <a onClick={this.handleGuest} href="#">sign in as a guest</a></span></small>
              </div>
              <div>
                <div className={this.props.formType === "signup" ? "session-form-disclaimer" : "session-form-disclaimer hidden"}><small>By registering, you agree to Strife's <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Privacy Policy</Link>.</small></div>
              </div>
            </div> { /* end of inner session-form-landing column */ }
            <div className={this.props.formType === "signup" ? "hidden session-form-qr-code-control" : "col-lg-5 session-form-qr-code-control"}>
              
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
        <div className={this.props.formType === "signup" ? "col-lg-4" : "col-lg-2"}></div>

        { /* end of session-form-background row */ }
      </div>
    );
  }
}

export default SessionForm;


