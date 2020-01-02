import React from 'react';

class UpdateChannelModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      unique_id: this.props.match.params[0].split("/")[1]
    }

    this.handleInput = this.handleInput.bind(this)
    this.updateChannel = this.updateChannel.bind(this)
    this.deleteChannel = this.deleteChannel.bind(this)
  }

  preventBubbling(e) {
    e.stopPropagation()
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  hideChannelUpdate(e) {
    e.preventDefault()
    $('.update-channel-modal-background').addClass('hidden')
  }

  updateChannel(e) {
    e.preventDefault()
    this.props.sendUpdateChannel({ channel: this.state })
      .then(() => this.hideChannelUpdate(e))
  }

  deleteChannel(e) {
    e.preventDefault()
    this.props.sendDeleteChannel(this.state.unique_id)
      .then(() => this.hideChannelUpdate(e))
  }

  render() {
    return (
      <div
        onClick={this.hideChannelUpdate}
        className="update-channel-modal-background hidden">
        <div
          onClick={this.preventBubbling}
          className="update-channel-modal">
          <div className="ucm-esc-button">
            <img
              onClick={this.hideChannelUpdate}
              className="ucm-esc-icon" src="/assets/esc.svg" />
          </div>
          <div className="ucm-name-form-wrapper">
            <div className="ucm-name-form-text">
              <small>CHANNEL NAME</small>
            </div>
            <div className="ucm-name-form-div">
              <form className="ucm-name-form">
                <input
                  onChange={this.handleInput("name")}
                  className="ucm-name-input"></input>
              </form>
            </div>
            <div className="ucm-option-buttons">
              <div
                onClick={this.updateChannel}
                className="ucm-update-button">
                Save Changes
              </div>
              <hr />
              <div
                onClick={this.deleteChannel}
                className="ucm-delete-button">
                Delete Channel
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default UpdateChannelModal