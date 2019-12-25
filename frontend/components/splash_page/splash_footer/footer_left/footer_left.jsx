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
            <strong className="disabled">Product</strong>
            <small>
              <li className="disabled">Download</li>
              <li className="disabled">Branding</li>
              <li className="disabled">Nitro</li>
            </small>
          </ul>
        </div>
        <div>
          <ul>
            <strong className="disabled">Developers</strong>
            <small>
              <li className="disabled">Sell Your Game</li>
              <li className="disabled">Rich Presence</li>
              <li className="disabled">Verification</li>
              <li className="disabled">Applications</li>
              <li className="disabled">Documentation</li>
            </small>
          </ul>
        </div>
      </div>
    )
  }
}

export default FooterLeft