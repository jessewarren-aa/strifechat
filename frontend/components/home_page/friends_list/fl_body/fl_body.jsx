import React from 'react';
import FLBodyItem from './fl_body_item'

class FLBody extends React.Component {
  constructor(props) {
    super(props)
    this.filterFriendsList = this.filterFriendsList.bind(this)
  }

  filterFriendsList () {
    const friendIds = []

    const filterType = $('.fl-header-selected').data('status')
    console.log(filterType)
    // this.forceUpdate()


    Object.values(this.props.friends).forEach(friend => {
      if (friend.status === filterType) { 
        // [DEV] add status check based on selected element in header
        if (friend.sender_id !== this.props.currentUser) {
          friendIds.push(friend.sender_id)
        } else {
          friendIds.push(friend.receiver_id)
        }
      }
    })
    return friendIds
  }

  componentDidMount () {
    if (!this.props.friends.length) {
      this.props.getFriendsList()
    }
  }

  componentDidUpdate () {
    this.filterFriendsList()
  }

  render() {
    return (
    <div>
      <div className="fl-body-master-flex">
        <div className="friends-list-columns-master">
          <div className="friends-list-name-header">
            <small>NAME</small>
          </div>
          <div className="friends-list-status-header pb-0">
            <small>STATUS</small> 
            {/* if statement, if friend list row is status accepted, return the friend's online status - otherwise, return "PENDING" or "BLOCKED" */}
          </div>
        </div>
      </div>
      <div className="fl-body-master-flex">
        <div className="friends-list-body-master">
          {this.filterFriendsList().map((user_id, index) => {
            if (Object.keys(this.props.users).includes(user_id.toString())) {
              return <FLBodyItem key={index} {...this.props.users[user_id]} history={this.props.history} />
            }
          })}
        </div>
      </div>
    </div>
    )
  }
}

export default FLBody