import React from 'react';

class DMHeader extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let currentlyMessaging = Object.values(this.props.users).filter(user => {
      if (user.unique_id === this.props.match.params[0]) {
        return user
      }
    })[0]

    if (!currentlyMessaging) {currentlyMessaging = {username: ""}}

    return (
      <div className="dm-header">
        <div className="dm-username">
          <div className="dm-at-symbol">@&nbsp;&nbsp;</div>
          <div>{ currentlyMessaging.username }</div>
        </div>
        <div className="dm-functions">{/* function bar */}</div>
      </div>
    )
  }
}

export default DMHeader