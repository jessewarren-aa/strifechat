import React from 'react';

class DirectMessageItem extends React.Component {
  constructor(props) {
    super(props)
    this.friendsClicked = this.friendsClicked.bind(this)
  }

  friendsClicked(e) {
    e.preventDefault()
    const removeFrom = $(".friend-selected")
    if (removeFrom) {
      removeFrom.removeClass("friend-selected")
    }
    const jObject = $(e.currentTarget)
    jObject.addClass("friend-selected")

    // console.log(this.props)
    this.props.history.push(`/channels/@me/${this.props.user.unique_id}`);
  }


  render() {
    const user = this.props.user

    const pathArray = this.props.match.url.split("/")
    const path = pathArray[pathArray.length - 1]
    return (
      <div
        className={path === user.unique_id ? "conversation-button user friend-selected" : "conversation-button user"} 
        onClick={this.friendsClicked}>
        <img
          className="user-avatar"
          src={user.image_url}>
        </img>
        <div
          data-id={user.id} 
          className="direct-messages-username">
          {user.username.length <= 16 ? user.username : user.username.slice(0, 16) + " ..."}
        </div>
      </div>
    )
  }
}

export default DirectMessageItem