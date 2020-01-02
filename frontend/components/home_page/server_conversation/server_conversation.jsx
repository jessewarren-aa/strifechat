import React from 'react';

import ServerUsersContainer from './server_users/server_users_container'
import ServerHeaderContainer from './server_header/server_header_container'
import MessagesContainer from '../conversation_view/direct_messages/direct_messages_container'

class ServerConversation extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if (!this.props.messages.length) {
      this.props.getMessages()
    }
  }

  render() {
    return (
      <div className="server-conversation-wrapper">
        <ServerHeaderContainer {...this.props} />
        <div className="server-conversation-view-master">
          <div className="server-conversation-master">
            <MessagesContainer {...this.props}/>
        </div>
          <ServerUsersContainer {...this.props} />
        </div>
      </div>
    )
  }
}

export default ServerConversation