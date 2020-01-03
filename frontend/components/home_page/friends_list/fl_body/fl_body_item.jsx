import React from 'react';



class FLBodyItem extends React.Component {
  constructor(props) {
    super(props)
    this.friendsClicked = this.friendsClicked.bind(this)
    this.acceptRequest = this.acceptRequest.bind(this)
    this.declineRequest = this.declineRequest.bind(this)
    this.cancelRequest = this.cancelRequest.bind(this)

    this.handleSelect = this.handleSelect.bind(this)
    // this.state = {
    //   success: ""
    // }
  }

  acceptRequest (e) {
    e.preventDefault()
    e.stopPropagation()

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

  handleSelect(unique_id) {
    return (e) => {
      e.preventDefault()
      e.stopPropagation()
      const removeFrom = $(".server-selected")
      if (removeFrom) {
        removeFrom.removeClass("server-selected")
      }
      const jObject = $(`#${unique_id}`)
      jObject.addClass("server-selected")

      const jServerOptionsModal = $('.server-options-modal-background')
      jServerOptionsModal.addClass('hidden')

      const path = jObject.attr('value')

      this.props.history.push(`/channels/${path}`)
    }
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
      if (this.props.userStatus) {
        statusMessage = this.props.userStatus.replace(/\s/g, '')
      } else {
        statusMessage = this.props.userStatus
      }
      
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
            {["OUTGOING", "INCOMING", "BLOCKED"].includes(this.props.friendStatus) ? <div><small>{this.props.friendStatus}</small></div> : <div className="user-status-icon"><img src={`/assets/${statusMessage}.svg`}></img></div>}
          </div>

          <div className="friends-list-mutual-servers-header">
            {Object.values(this.props.mutualServers).map((server, index) => {
              return (
                <div 
                  key={index}
                  value={server.unique_id}
                  onClick={this.handleSelect(server.unique_id)}
                  className="fl-server-bar-icon">
                  <img className="fl-logo-sizer" src={`/assets/${server.server_icon}`} />
                </div>
              )
            })}
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