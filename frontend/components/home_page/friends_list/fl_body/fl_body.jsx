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

    Object.values(this.props.friends).forEach(friend => {
      if (friend.status === filterType) { 
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

  render() {
    const filterType = $('.fl-header-selected').data('status')
    if (filterType === "ADDFRIEND") {
      return (
        <div>test</div>
      )
    } else {
      const result = this.filterFriendsList()
      if (!result) {
        return null
      }
      return (
        <div>
          <div className="fl-body-master-flex">
            <div className="friends-list-columns-master">
              <div className="friends-list-name-header">
                <small>NAME</small>
              </div>
              <div className="friends-list-status-header pb-0">
                <small>STATUS</small>
                {/* an if statement: if friend list row is status accepted, return the friend's online status - otherwise, return "PENDING" or "BLOCKED" */}
              </div>
            </div>
          </div>
          <div className="fl-body-master-flex">
            <div className="friends-list-body-master">
              {result.map((user_id, index) => {
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
}

export default FLBody