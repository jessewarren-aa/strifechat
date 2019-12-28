import React from 'react';

class ServerBar extends React.Component {
  constructor(props) {
    super(props)
    this.handleSelect = this.handleSelect.bind(this)
    this.serverOptions = this.serverOptions.bind(this)
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
        id="default-server"
        onClick={this.handleSelect} 
        value="@me"
        className="server-bar-logo server-bar-icon server-selected">
        <img
          className="logo-sizer"
          src={window.logoImageUrl}>
        </img>
      </div>

      <div><hr className="server-bar-hr" /></div>

      {/* server list goes here! */}

      <div
        onClick={this.serverOptions}
        className="server-bar-logo server-bar-icon">
        <img
          className="logo-sizer"
          src={window.plus}>
        </img>
      </div>

      {/* <div
        onClick={this.handleSelect}
        className="server-bar-logo server-bar-icon">
        <img
          className="logo-sizer"
          src={window.beach}>
        </img>
      </div>

      <div
        onClick={this.handleSelect}
        className="server-bar-logo server-bar-icon">
        <img
          className="logo-sizer"
          src={window.germanyFlag}>
        </img>
      </div>

      <div
        onClick={this.handleSelect}
        className="server-bar-logo server-bar-icon">
        <img
          className="logo-sizer"
          src={window.castle}>
        </img>
      </div> */}

    </div>
    )
  }
}

export default ServerBar