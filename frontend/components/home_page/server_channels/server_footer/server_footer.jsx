import React from 'react';

class ConversationFooter extends React.Component {
  constructor(props) {
    super(props)
    this.copyFriendCode = this.copyFriendCode.bind(this)
    this.changeStatus = this.changeStatus.bind(this)
  }

  copyFriendCode (e) {
    e.preventDefault()
    let textToCopy = document.getElementById('hidden-friend-code');

    textToCopy.focus()
    textToCopy.select()
    textToCopy.setSelectionRange(0, 99999);

    document.execCommand("copy");
  }

  componentDidMount () {
    this.props.getDirectMessageUsers()
    this.props.sendGetUsers()
  }

  changeStatusPopUp(e) {
    e.preventDefault()
    e.stopPropagation()
    $('.status-changer-popup').toggleClass('hidden')
  }

  closeStatusPopUp() {
    $('.status-changer-popup').addClass('hidden')
  }

  changeStatus(e) {
    e.preventDefault()
    const newStatus = $(e.currentTarget).attr('value').replace(/\s/g, "")
    this.props.sendUpdateUser({ user: { current_status: newStatus }, id: this.props.currentUser })
      .then(() => this.closeStatusPopUp())
  }

  render() {
    let username = ""
    let addCode = ""
    if (!this.props.friendCode) {
      return null
    }
    username = this.props.friendCode.split("#")[0]
    addCode = "#" + this.props.friendCode.split("#")[1]

    return (
    <div 
      className="conversation-footer-master">
        <input
          className=""
          type="text"
          id="hidden-friend-code"
          defaultValue={`${username}${addCode}`} />

        <div className="status-changer-popup hidden">
          <div
            onClick={this.changeStatus}
            className="user-status-icon status-changer-option"
            value="ONLINE">
            <img src="/assets/ONLINE.svg" />
          </div>
          <div
            onClick={this.changeStatus}
            className="user-status-icon status-changer-option"
            value="IDLE">
            <img src="/assets/IDLE.svg" />
          </div>
          <div
            onClick={this.changeStatus}
            className="user-status-icon status-changer-option"
            value="DO NOT DISTURB">
            <img src="/assets/DONOTDISTURB.svg" />
          </div>
          <div
            onClick={this.changeStatus}
            className="user-status-icon status-changer-option"
            value="OFFLINE">
            <img src="/assets/OFFLINE.svg" />
          </div>
        </div>
        
        <div
          onClick={this.changeStatusPopUp}
          className="user-status-icon status-changer">
          <img src={this.props.currentStatus ? `/assets/${this.props.currentStatus}.svg` : `/assets/OFFLINE.svg`} />
        </div>

        <div 
          onClick={this.copyFriendCode}
          className="conversation-footer-friendcode noselect">
          {/* <div className="copy-success">
            Copied!
          </div> */}

          <div>{username.length <= 16 ? username : username.slice(0, 16) + " ..."}</div>
          <div className="conversation-footer-addcode"><small>{addCode}</small></div>
        </div>
        <button 
          className="user-card-logout" 
          onClick={this.props.logout}>
            Log Out
        </button>
    </div>
    )
  }
}

export default ConversationFooter
