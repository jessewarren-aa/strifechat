import React from 'react';

class CTA extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <div className="empty-space-enforcer"></div>
        <div className="splash-cta marginify">
          <div className="cta-header">
            <h2>It's time to ditch Skype and TeamSpeak.</h2>
          </div>
          <div className="text-center cta-body">
            <p>All-in-one voice and text chat for gamers that's free, secure, and works on both your desktop and phone.<br />Stop paying for TeamSpeak servers and hassling with Skype. Simplify your life.</p>
          </div>

          <div className="cta-button-centering">
            <button className="cta-button cta-button-white">Download for Windows</button>
            <button className="cta-button">Open Strife in your browser</button>
          </div>
        </div>
      </div>
    )
  }
}

export default CTA