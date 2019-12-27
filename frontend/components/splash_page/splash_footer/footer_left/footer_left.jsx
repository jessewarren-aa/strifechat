import React from 'react';

class FooterLeft extends React.Component {
  constructor(props) {
    super(props)

    this.headHome = this.headHome.bind(this)
    this.footerPush = this.footerPush.bind(this)
  }

  headHome(e) {
    e.preventDefault();
    this.props.history.push("/");
    // return <Redirect to="/"/>
  }

  footerPush (e) {
    e.preventDefault()
    if (this.props.currentUser) {
      this.props.history.push("/channels/@me")
    } else {
      this.props.history.push("/signup")
    }
  }

  render() {
    return (
      <div className="cta-footer-left col-md-5">
        <div className="cta-footer-logo">
          <a 
            href="#"
            onClick={this.headHome}>
              <img
                className="logo-sizer"
                src={window.logoImageUrl} />
          </a>
        </div>
        <div>
          <ul>
            <strong>Product</strong>
            <small>
              <li 
                className="cursor-hover"
                onClick={this.footerPush}>
                {this.props.currentUser ? "Open StrifeChat" : "Sign Up"}
              </li>
            </small>
          </ul>
        </div>
        <div>
          <ul>
            <strong>Developer</strong>
            <small>
              <li className="disabled">About</li>
              <li className="disabled">Github</li>
            </small>
          </ul>
        </div>
      </div>
    )
  }
}

export default FooterLeft