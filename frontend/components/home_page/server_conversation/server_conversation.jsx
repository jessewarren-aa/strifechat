import React from 'react';
// import { Route } from 'react-router-dom';
// import DirectMessagesContainer from './direct_messages/direct_messages_container'
// import DMHeaderContainer from './dm_header/dm_header_container'
// import DMFooterContainer from './dm_footer/dm_footer_container'

import ServerUsersContainer from '../server_users/server_users_container'

class ServerConversation extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // if (!this.props.messages.length) {
    //   this.props.getMessages()
    // }
  }

  render() {
    return (
      <div className="server-conversation-view-master">
        <div className="server-conversation-master">
          server conversation
        {/* <Route exact path="/channels/@me/*" component={DMHeaderContainer} />
        <Route exact path="/channels/@me/*" component={DirectMessagesContainer} />
        <Route exact path="/channels/@me/*" component={DMFooterContainer} /> */}

          {/* <Route exact path ="/channels/@me/*" render={(props) => <DMFooterContainer {...props} />} /> */}

          {/* render={(props) => <PropsPage {...props} title={`Props through render`} />} */}
        </div>
        <ServerUsersContainer {...this.props} />
      </div>
    )
  }
}

export default ServerConversation