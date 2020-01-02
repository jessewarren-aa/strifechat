import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ServerBarContainer from './server_bar/server_bar_container'
import ConversationBarContainer from './conversation_bar/conversation_bar_container'
import ConversationViewContainer from './conversation_view/conversation_view_container'
import FriendsListContainer from './friends_list/friends_list_container'

import ServerPlusContainer from './server_plus/server_plus_container'
import ServerChannelContainer from './server_channels/server_channels_container'
import ServerConversationContainer from './server_conversation/server_conversation_container'

import ServerUpdateComponent from './server_update/server_update'

class HomePage extends React.Component {
  constructor(props) {
    super(props)

    this.preventBubbling = this.preventBubbling.bind(this)
  }

  componentDidMount () {
    this.props.sendGetServers()
  }
  

  preventBubbling (e) {
    e.stopPropagation()
  }

  render() {
    return (
    <div className="home-page-master">
      <ServerUpdateComponent {...this.props} />

      <ServerPlusContainer {...this.props} />
      <Route path="/channels/*" component={ServerBarContainer} />
      <Switch>
        <Route 
          path="/channels/@me" 
          component={ConversationBarContainer} />
        <Route path="/channels/*" component={ServerChannelContainer} />
      </Switch>
      <Switch>
        <Route exact path="/channels/@me" component={FriendsListContainer} />
        <Route path="/channels/@me/*" component={ConversationViewContainer} />
        <Route path="/channels/*" component={ServerConversationContainer} />
      </Switch>
    </div>
    )
  }
}

export default HomePage