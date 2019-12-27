import React from 'react';

class CTA extends React.Component {
  constructor(props) {
    super(props)
    this.openButton = this.openButton.bind(this)
  }

  openButton (e) {
    e.preventDefault()
    this.props.history.push("/channels/@me");
  }

  render() {
    return (
      <div>
        <div className="empty-space-enforcer"></div>
        <div className="splash-cta marginify">
          <div className="cta-header">
            <h2 className="text-center">It's time to ditch Skype and TeamSpeak.</h2>
          </div>
          <div className="text-center cta-body">
            <p>All-in-one voice and text chat for gamers that's free, secure, and works on both your desktop and phone.<br /><span className="eek-hide-cta-text">Stop paying for TeamSpeak servers and hassling with Skype. Simplify your life.</span></p>
          </div>

          <div className="cta-button-centering">
            <button 
              className="cta-button cta-button-white">
              <a href={window.puppy} download="puppy.jpg">
                Download<span id="cta-download-button-wide"> for Windows</span>
              </a>
            </button>
            <button 
              onClick={this.openButton}
              className="cta-button">
              Open Strife<span id="cta-open-button-wide"> in your browser</span>
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default CTA