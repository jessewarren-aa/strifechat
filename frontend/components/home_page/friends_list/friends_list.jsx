import React from 'react';
import { Route } from 'react-router-dom';

import FLHeaderContainer from './fl_header/fl_header_container'
import FLBodyContainer from './fl_body/fl_body_container'

class FriendsList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return <div className="friends-list-master">
      <Route path="/channels/" component={FLHeaderContainer} />
      <Route path="/channels/" component={FLBodyContainer} />
    </div>
  }
}

export default FriendsList