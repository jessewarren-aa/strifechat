import React from 'react';

class FLBodyItem extends React.Component {
  constructor(props) {
    super(props)
    this.friendsClicked = this.friendsClicked.bind(this)
  }

  friendsClicked(e) {
    e.preventDefault()
    this.props.history.push(`/channels/@me/${this.props.unique_id}`);
  }

  render () {
    let statusMessage = ""
    if (["OUTGOING", "INCOMING", "BLOCKED"].includes(this.props.friendStatus)) {
      statusMessage = this.props.friendStatus
    } else {
      statusMessage = "userStatus"
    }

    return (
      <div>
        <div 
          onClick={this.friendsClicked}
          className="small-bottom-border friend-on-list">
          <div className="friends-list-name-header">
            <div className="fl-image pr-2">
              <img className="fl-user-avatar" src={this.props.image_url}></img>
            </div>
            <div className="fl-username">
              {this.props.username.length > 12 ? this.props.username.slice(0, 12) + " ..." : this.props.username}
            </div>
          </div>
          <div className="friends-list-status-header">
            <small>{statusMessage}</small>
          </div>

          <div className={statusMessage === "INCOMING" ? "friends-list-status-header-buttons" : "hidden"}>
            <div className="fl-accept-button"><small>ACCEPT</small></div>
            <div className="fl-decline-button"><small>DECLINE</small></div>
            {/* [DEV] remember to stop bubbling on these clicks */}
          </div>
        </div>
      </div>
    )
  }
}

export default FLBodyItem