import React from 'react';

class DirectMessageItem extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount () {
    if (!this.props.user.id) {
      this.props.getUser(this.props.user[1])
    }
  }

  friendsClicked(e) {
    e.preventDefault()
    const removeFrom = $(".friend-selected")
    if (removeFrom) {
      removeFrom.removeClass("friend-selected")
    }
    const jObject = $(e.currentTarget)
    jObject.addClass("friend-selected")
  }


  render() {
    const {user} = this.props
    return (
      <div
        className="conversation-button user"
        onClick={this.friendsClicked}>
        <img
          className="user-avatar"
          src={user.image_url}>
        </img>
        <div className="direct-messages-username">
          {user.username.length <= 16 ? user.username : user.username.slice(0, 16) + " ..."}
        </div>
      </div>
    )
  }
}

export default DirectMessageItem