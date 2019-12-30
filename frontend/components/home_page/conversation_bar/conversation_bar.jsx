import React from 'react';
import { Route } from 'react-router-dom';

import ConversationHeaderContainer from './conversation_header/conversation_header_container'
import ConversationBodyContainer from './conversation_bar_body/conversation_bar_body_container'
import ConversationFooterContainer from './conversation_footer/conversation_footer_container'

class ConversationBar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div className="conversation-bar-master">
      {/* [DEV] logic here to check if this renders components, otherwise 404 */}
      <Route path="/channels/*" component={ConversationHeaderContainer} />
      <Route path="/channels/*" component={ConversationBodyContainer} />
      <Route path="/channels/*" component={ConversationFooterContainer} />
    </div>
  }
}

export default ConversationBar