import React from 'react';

class ServerBar extends React.Component {
  constructor(props) {
    super(props)
    this.handleSelect = this.handleSelect.bind(this)
    this.serverOptions = this.serverOptions.bind(this)
    this.modalHide = this.modalHide.bind(this)
  }

  componentDidUpdate () {
    this.modalHide(false)
  }

  modalHide(slideHide = true) {

    if (slideHide) {
      $('#primary-modal-server-options').show("slide", { direction: "right" }, 0);
    }

    $('#slideable-join-form').addClass("hidden");
    $('#slideable-create-form').addClass("hidden");

    $('#slideable-join-form').removeClass("animated bounceIn");
    $('#slideable-create-form').removeClass("animated bounceIn");

    const jServerOptionsModal = $('.server-options-modal-background')
    jServerOptionsModal.addClass('hidden')

    const removeFrom = $(".server-selected")
    if (removeFrom) {
      removeFrom.removeClass("server-selected")
    }

    const jObject = $(`#${this.props.match.params[0].split("/")[0].replace("@", "")}`)
    jObject.addClass("server-selected")
  }

  componentDidMount () {
    if (!this.props.servers.length) {
      this.props.sendGetServers()
    }

    this.props.sendGetServerUsers()
  }

  serverOptions (e) {
    e.preventDefault()
    const removeFrom = $(".server-selected")
    if (removeFrom) {
      removeFrom.removeClass("server-selected")
    }
    const jObject = $(e.currentTarget)
    jObject.addClass("server-selected")

    const jServerOptionsModal = $('.server-options-modal-background')
    jServerOptionsModal.removeClass('hidden')

  }

  handleSelect (e) {
    e.preventDefault()
    const removeFrom = $(".server-selected")
    if (removeFrom) {
      removeFrom.removeClass("server-selected")
    }
    const jObject = $(e.currentTarget)
    jObject.addClass("server-selected")

    const jServerOptionsModal = $('.server-options-modal-background')
    jServerOptionsModal.addClass('hidden')

    const path = jObject.attr('value')

    this.props.history.push(`/channels/${path}`)
  }

  render() {
    return (
    <div 
      className="server-bar-master">

      <div 
        id="me"
        onClick={this.handleSelect} 
        value="@me"
        className="server-bar-logo server-bar-icon">
        <img
          className="logo-sizer"
          src={window.logoImageUrl}>
        </img>
      </div>

      <div><hr className="server-bar-hr" /></div>

      {Object.values(this.props.servers).map((server, index) => {
        return (
          <div
            id={server.unique_id}
            key={index}
            value={server.unique_id}
            onClick={this.handleSelect}
            className="server-bar-logo server-bar-icon">
            <img
              className="logo-sizer"
              src={`/assets/${server.server_icon}`}>
            </img>
          </div>
        )
      })}

      <div
        onClick={this.serverOptions}
        className="server-bar-logo server-bar-icon">
        <img
          className="logo-sizer"
          src={window.plus}>
        </img>
      </div>

    </div>
    )
  }
}

export default ServerBar