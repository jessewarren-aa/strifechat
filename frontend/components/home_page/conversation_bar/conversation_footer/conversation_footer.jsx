import React from 'react';

class ConversationFooter extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
    <div className="conversation-footer-master">
        <p>Hello, {this.props.currentUser.username}</p>
        {/* <button onClick={this.props.logout}>Log Out!</button> */}
    </div>
    )
  }
}

export default ConversationFooter
