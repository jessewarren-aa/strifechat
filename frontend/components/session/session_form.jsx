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

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInput = this.handleInput.bind(this);
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

  render() {
    const redirectURL = this.props.formType === "login" ? "/signup" : "/login";
    const verbiage = this.props.formType === "signup" ? "Log In!" : "Sign Up!";
    return (
      <div>
        <header>
          <Link to={redirectURL}>{verbiage}</Link><br />
          {{ "Log In!": "Sign Up!", "Sign Up!": "Log In!" }[verbiage]}
        </header>
        <div>
          <ul>
            {this.props.errors.map((error, i) => <li key={i}>{error}</li>)}
          </ul>
        </div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label className={this.props.formType === "signup" ? "" : "hidden"}>
              Username:
              <input
                type="text"
                value={this.state.username}
                onChange={this.handleInput("username")}
              />
            </label>

            <label>
              Email:
              <input
                type="text"
                value={this.state.email}
                onChange={this.handleInput("email")}
              />
            </label>

            <label>
              Password:
              <input
                type="password"
                value={this.state.password}
                onChange={this.handleInput("password")}
              />
            </label>
            <button onClick={this.handleSubmit}>
              {this.props.formType === "signup" ? "Sign Up!" : "Log In!"}
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default SessionForm;


