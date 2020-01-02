import React from 'react';

class ServerUpdate extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      unique_id: this.props.match.params[0].split("/")[0]
    }

    this.handleInput = this.handleInput.bind(this)
    this.updateServer = this.updateServer.bind(this)
  }

  preventBubbling(e) {
    e.stopPropagation()
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  hideServerUpdate(e) {
    e.preventDefault()
    $('.update-server-modal-background').addClass('hidden')
  }

  updateServer (e) {
    e.preventDefault()
    this.props.sendUpdateServer({ server: this.state })
      .then(() => this.hideServerUpdate(e))
    
  }

  render() {
  return (
      <div
        onClick={this.hideServerUpdate}
        className="update-server-modal-background hidden">
        <div
          onClick={this.preventBubbling}
          className="update-server-modal">
          <div className="usm-esc-button">
            <img
              onClick={this.hideServerUpdate}
              className="usm-esc-icon" src="/assets/esc.svg" />
          </div>
          <div className="usm-name-form-wrapper">
            <div className="usm-name-form-text">
              <small>SERVER NAME</small>
            </div>
            <div className="usm-name-form-div">
              <form className="usm-name-form">
                <input 
                  onChange={this.handleInput("name")}
                  className="usm-name-input"></input>
              </form>
            </div>
            <div 
              onClick={this.updateServer}
              className="usm-update-button">
              Save Changes
          </div>
          </div>
        </div>
      </div>
    )
  }
}

export default ServerUpdate