import React from 'react';

class FooterRight extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className="cta-footer-right col-md-5">
        <div>
          <ul>
            <strong className="disabled">Resources</strong>
            <small>
              <li className="disabled">Help & Support</li>
              <li className="disabled">Guidelines</li>
              <li className="disabled">Feedback</li>
              <li className="disabled">Terms</li>
              <li className="disabled">Privacy</li>
              <li className="disabled">Status</li>
            </small>
          </ul>
        </div>
        <div>
          <ul>
            <strong className="disabled">Company</strong>
            <small>
              <li className="disabled">About</li>
              <li className="disabled">Blog</li>
              <li className="disabled">Jobs</li>
            </small>
          </ul>
        </div>
        <div>
          <ul>
            <strong className="disabled">More</strong>
            <small>
              <li className="disabled">Partners</li>
              <li className="disabled">HypeSquad</li>
              <li className="disabled">Merch Store</li>
              <li className="disabled">Press Inquiries</li>
              <li className="disabled">Open Source</li>
            </small>
          </ul>
        </div>
      </div>
    )
  }
}

export default FooterRight