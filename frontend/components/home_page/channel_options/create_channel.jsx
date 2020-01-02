import React from 'react';

class CreateChannelModal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      unique_id: this.props.match.params[0].split("/")[0]
    }

    this.handleInput = this.handleInput.bind(this)
    this.createChannel = this.createChannel.bind(this)
  }

  preventBubbling(e) {
    e.stopPropagation()
  }

  handleInput(type) {
    return (e) => {
      this.setState({ [type]: e.target.value });
    };
  }

  hideCreateChannel(e) {
    e.preventDefault()
    $('.create-channel-modal-background').addClass('hidden')
  }

  createChannel(e) {
    e.preventDefault()
    this.props.sendCreateChannel({ channel: this.state })
      .then(() => this.hideCreateChannel(e))

  }

  render() {
    return (
      <div
        onClick={this.hideCreateChannel}
        className="create-channel-modal-background hidden">
        <div
          onClick={this.preventBubbling}
          className="create-channel-modal">
          <div className="ucm-esc-button">
            <img
              onClick={this.hideCreateChannel}
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
            <div
              onClick={this.createChannel}
              className="ucm-update-button">
              Create Channel
          </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CreateChannelModal