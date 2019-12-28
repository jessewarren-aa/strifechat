import React from 'react';

class ConversationFooter extends React.Component {
  constructor(props) {
    super(props)
    this.copyFriendCode = this.copyFriendCode.bind(this)
  }

  copyFriendCode (e) {
    e.preventDefault()
    let textToCopy = document.getElementById('hidden-friend-code');

    textToCopy.focus()
    textToCopy.select()
    textToCopy.setSelectionRange(0, 99999);

    document.execCommand("copy");
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
            Log Out!
        </button>
    </div>
    )
  }
}

export default ConversationFooter
