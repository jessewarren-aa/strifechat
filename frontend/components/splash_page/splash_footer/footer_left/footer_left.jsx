import React from 'react';

class FooterLeft extends React.Component {
  constructor(props) {
    super(props)

    this.headHome = this.headHome.bind(this)
  }

  headHome(e) {
    e.preventDefault();
    this.props.history.push("/");
    // return <Redirect to="/"/>
  }

  render() {
    return (
      <div className="cta-footer-left">
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
              <li>Download</li>
              <li>Branding</li>
              <li>Nitro</li>
            </small>
          </ul>
        </div>
        <div>
          <ul>
            <strong>Developers</strong>
            <small>
              <li>Sell Your Game</li>
              <li>Rich Presence</li>
              <li>Verification</li>
              <li>Applications</li>
              <li>Documentation</li>
            </small>
          </ul>
        </div>
      </div>
    )
  }
}

export default FooterLeft