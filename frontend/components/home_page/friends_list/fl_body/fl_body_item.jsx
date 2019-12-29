import React from 'react';



class FLBodyItem extends React.Component {
  constructor(props) {
    super(props)
    this.friendsClicked = this.friendsClicked.bind(this)
    this.acceptRequest = this.acceptRequest.bind(this)
    this.declineRequest = this.declineRequest.bind(this)
    this.cancelRequest = this.cancelRequest.bind(this)
    // this.state = {
    //   success: ""
    // }
  }

  acceptRequest (e) {
    e.preventDefault()
    e.stopPropagation()

    console.log(this.props.requestId)

    const updateObject = {
      friend_request: {
        id: this.props.requestId,
        status: "ACCEPTED"
      }
    }

    this.props.updateFriend(updateObject)
      // .then(() => this.setState({ success: "Friend request sent!" }))
  }

  cancelRequest (e) {
    e.preventDefault()
    e.stopPropagation()

    this.props.destroyFriend(this.props.requestId)
  }

  declineRequest (e) {
    e.preventDefault()
    e.stopPropagation()

    const updateObject = {
      friend_request: {
        id: this.props.requestId,
        status: "REJECTED"
      }
    }

    this.props.updateFriend(updateObject)
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
      statusMessage = "USER STATUS"
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

          <div className="friends-list-mutual-servers-header pr-2">
            <small>MUTUAL SERVERS</small>
          </div>

          <div 
            className={statusMessage === "INCOMING" ? "friends-list-status-header-buttons" : "hidden"}>
            <div 
              onClick={this.acceptRequest}
              className="fl-accept-button">
                <small>ACCEPT</small>
            </div>
            <div 
              onClick={this.declineRequest}
              className="fl-decline-button">
                <small>DECLINE</small>
            </div>
          </div>

          <div
            className={statusMessage === "OUTGOING" ? "friends-list-status-header-buttons" : "hidden"}>
            <div
              onClick={this.cancelRequest}
              className="fl-cancel-button">
              <small>CANCEL</small>
            </div>
          </div>

          <div
            className={["OUTGOING", "INCOMING", "BLOCKED"].includes(statusMessage) ? "hidden" : "friends-list-status-header-buttons"}>
            <div
              onClick={this.cancelRequest}
              className="fl-remove-button">
              <img src="assets/remove_friend.svg"></img>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FLBodyItem