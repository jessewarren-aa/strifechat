import React from 'react';
import FLBodyItem from './fl_body_item'

class FLBody extends React.Component {
  constructor(props) {
    super(props)
    this.filterFriendsList = this.filterFriendsList.bind(this)
    this.sendFriendRequest = this.sendFriendRequest.bind(this)

    this.state = {
      success: ""
    }
  }

  filterFriendsList () {
    const friendRequests = []

    const filterType = this.props.status

    Object.values(this.props.friends).forEach(friend => {
      let status = friend.status
      if (friend.status === filterType) { 
        if (friend.sender_id !== this.props.currentUser) {
          if (status === "PENDING") {
            status = "INCOMING"
          }
          friendRequests.push({ user_id: friend.sender_id, status })
        } else {
          if (status === "PENDING") {
            status = "OUTGOING"
          }
          friendRequests.push({ user_id: friend.receiver_id, status })
        }
      }
    })
    return friendRequests
  }

  sendFriendRequest (e) {
    e.preventDefault()

    const jObject = $('.send-friend-input')

    const friendObject = {
      friend_request: {
        sender_id: this.props.currentUser,
        friend_code: jObject.val()
      }
    }

    this.props.createFriend(friendObject)
      .then(() => this.setState({success: "Friend request sent!"}))
  }

  componentDidMount () {
    if (!this.props.friends.length) {
      this.props.getFriendsList(this.props.status)
    }
  }

  render() {
    const filterType = this.props.status

    if (filterType === "ADDFRIEND") {
      return (
        <div>
          <div className="friend-request-container">
            <div className="friend-request-text-header">
              <div className="add-friend-header pt-2">ADD FRIEND</div>
              <div className="friend-request-text-subheader pb-2">
                <small>
                  You can add a friend with their StrifeTag.
                </small>
              </div>
            </div>
          </div>
          <div className="friend-request-container">
            <div className="send-friend-request-container">
              <form 
                onSubmit={this.sendFriendRequest}
                className="send-friend-form">
                <input 
                  type="text" 
                  placeholder="Enter a StrifeTag#0000"
                  className="send-friend-input">
                </input>
                <button
                  className="send-friend-request-button">
                  Send Friend Request
              </button>
              </form>
            </div>
          </div>
          <div className="friend-request-container">
            <div className="session-form-errors display-mid">
              <small>
                {this.state.success ? this.state.success : ""}
                {/* [DEV] change to positive color */}
                <ul>
                  {this.props.errors.map((error, i) => <li key={i}>{error}</li>)}
                </ul>
              </small>
            </div>
          </div>
          <div>
            <div className="wumpus">
              <img
                src={window.wumpus} />
            </div>
            <small className="wumpus-text">Wumpus is lonely, but you don't have to be!</small>
          </div>
            
        </div>
      )
    } else {
      return (
        <div>
          <div className="fl-body-master-flex">
            <div className="friends-list-columns-master">
              <div className="friends-list-name-header">
                <small>NAME</small>
              </div>
              <div className="friends-list-status-header pb-0">
                <small>STATUS</small>
              </div>
            </div>
          </div>
          <div className="fl-body-master-flex">
            <div className="friends-list-body-master">
              {this.filterFriendsList().map((friendRequest, index) => {
                const {user_id, status} = friendRequest
                const userKeys = Object.keys(this.props.users)
                if (userKeys.includes(user_id.toString())) {
                  return <FLBodyItem key={index} {...this.props.users[user_id]} history={this.props.history} friendStatus={status} />
                }
              })}
            </div>
          </div>
        </div>
      )
    }
  }
}

export default FLBody