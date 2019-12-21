import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ServerBarContainer from './server_bar/server_bar_container'
import ConversationBarContainer from './conversation_bar/conversation_bar_container'
import DirectMessageContainer from './direct_message_main/direct_message_main_container'

import FourOhFourContainer from '../four_oh_four/four_oh_four_container'

class HomePage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div className="home-page-master">
      <Switch>
        <Route exact path="/channels" component={FourOhFourContainer} />
        <Route path="/channels" component={ServerBarContainer} />
      </Switch>
      <Route exact path="/channels/*" component={ConversationBarContainer} />
      {/* <Route exact path="/" component={FriendListContainer} /> */}
        {/* Containers header with online/all/pending/blocked/add friend & "new conversation", "@ pings", and "?" help */}
      <Route path="/channels/@me/*" component={DirectMessageContainer} />

      {/* render={(props) => <PropsPage {...props} title={`Props through render`} />} */}


        {/* Used once a friend is clicked or new message is started */}
        {/* Has a header with the user's name, plus pin message, add friend (group chat), search, "@ pings" and "?" help */}
    </div>
  }
}

export default HomePage