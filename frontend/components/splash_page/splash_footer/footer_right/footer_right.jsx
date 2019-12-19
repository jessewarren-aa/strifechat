import React from 'react';

class FooterRight extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="cta-footer-right">
        <div>
          <ul>
            <strong>Resources</strong>
            <small>
              <li>Help & Support</li>
              <li>Guidelines</li>
              <li>Feedback</li>
              <li>Terms</li>
              <li>Privacy</li>
              <li>Status</li>
            </small>
          </ul>
        </div>
        <div>
          <ul>
            <strong>Company</strong>
            <small>
              <li>About</li>
              <li>Blog</li>
              <li>Jobs</li>
            </small>
          </ul>
        </div>
        <div>
          <ul>
            <strong>More</strong>
            <small>
              <li>Partners</li>
              <li>HypeSquad</li>
              <li>Merch Store</li>
              <li>Press Inquiries</li>
              <li>Open Source</li>
            </small>
          </ul>
        </div>
      </div>
    )
  }
}

export default FooterRight