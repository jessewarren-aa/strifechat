import React from 'react';

class ServerBar extends React.Component {
  constructor(props) {
    super(props)
    this.handleSelect = this.handleSelect.bind(this)
  }

  handleSelect (e) {
    e.preventDefault()
    const removeFrom = $(".server-selected")
    if (removeFrom) {
      removeFrom.removeClass("server-selected")
    }
    const jObject = $(e.currentTarget)
    jObject.addClass("server-selected")
  }

  render() {
    return (
    <div 
      className="server-bar-master">
      <div 
        onClick={this.handleSelect} 
        className="server-bar-logo server-bar-icon server-selected">
        <img
          className="logo-sizer"
          src={window.logoImageUrl}>
        </img>
      </div>
      <div><hr className="server-bar-hr" /></div>
    </div>
    )
  }
}

export default ServerBar