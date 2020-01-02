import React from 'react';
// import { Route } from 'react-router-dom';

import ServerHeaderContainer from './server_header/server_header_container'
import ServerBodyContainer from './server_bar_body/server_bar_body_container'
import ServerFooterContainer from './server_footer/server_footer_container'

class ServerChannels extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount () {
    this.props.sendGetChannels()
  }

  render() {
    return <div className="server-channels-master">
      <ServerHeaderContainer {...this.props} />
      <ServerBodyContainer {...this.props} />
      <ServerFooterContainer />
    </div>
  }
}

export default ServerChannels