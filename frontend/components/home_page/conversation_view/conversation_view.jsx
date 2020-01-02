import React from 'react';
import { Route } from 'react-router-dom';
import DirectMessagesContainer from './direct_messages/direct_messages_container'
import DMHeaderContainer from './dm_header/dm_header_container'
// import DMFooterContainer from './dm_footer/dm_footer_container'

class HomePage extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    // if (!this.props.users.length) {
    //   this.props.getDirectMessageUsers()
    // }

    if (!this.props.messages.length) {
      this.props.getMessages()
    }
  }

  render() {
    return (
    <div className="conversation-view-master">
      <Route exact path="/channels/@me/*" component={DMHeaderContainer} />
      <Route exact path="/channels/@me/*" component={DirectMessagesContainer} />
      {/* <Route exact path="/channels/@me/*" component={DMFooterContainer} /> */}
    </div>
    )
  }
}

export default HomePage