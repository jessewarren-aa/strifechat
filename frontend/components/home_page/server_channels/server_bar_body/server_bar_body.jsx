import React from 'react';

class ServerBarBody extends React.Component {
  constructor(props) {
    super(props)
  }


  render() {
    console.log(this.props.channels)
    return (
      <div className="server-conversation-bar-body-master">
        server channels
      </div>
    )
  }
}

export default ServerBarBody
