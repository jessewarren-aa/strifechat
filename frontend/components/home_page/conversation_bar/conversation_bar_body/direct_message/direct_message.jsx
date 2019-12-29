import React from 'react';

class DirectMessageItem extends React.Component {
  constructor(props) {
    super(props)
    this.friendsClicked = this.friendsClicked.bind(this)
    // this.closeMessage = this.closeMessage.bind(this)
  }

  friendsClicked(e) {
    e.preventDefault()
    const removeFrom = $(".friend-selected")
    if (removeFrom) {
      removeFrom.removeClass("friend-selected")
    }
    const jObject = $(e.currentTarget)
    jObject.addClass("friend-selected")
    
    this.props.history.push(`/channels/@me/${this.props.user.unique_id}`);
  }

  // closeMessage (e) {
  //   e.preventDefault()
  //   e.stopPropagation()

  //   console.log(e.target)

  //   console.log("closing")
  // }


  render() {
    const user = this.props.user

    // console.log(Object.values(this.props.messages).length)

    const pathArray = this.props.match.url.split("/")
    const path = pathArray[pathArray.length - 1]

    if (Object.values(this.props.messages).length < 1) {
      return null
    }

    return (
      <div
        className={path === user.unique_id ? "conversation-button user friend-selected" : "conversation-button user"} 
        onClick={this.friendsClicked}>
        <div className="display-flex">
          <img
            className="user-avatar"
            src={user.image_url}>
          </img>
          <div
            data-id={user.id}
            className="direct-messages-username">
            {user.username.length <= 12 ? user.username : user.username.slice(0, 12) + " ..."}
          </div>
        </div>

        {/* <div
          onClick={this.closeMessage} 
          className="dm-closer">
          <small>X</small>
        </div> */}
      </div>
    )
  }
}

export default DirectMessageItem