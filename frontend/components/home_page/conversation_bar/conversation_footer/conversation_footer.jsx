import React from 'react';

class ConversationFooter extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const username = this.props.friendCode.split("#")[0]
    const addCode = "#" + this.props.friendCode.split("#")[1]
    return (
    <div className="conversation-footer-master">
        <div className="conversation-footer-friendcode">
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
