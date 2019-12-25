import React from 'react';

class FLHeader extends React.Component {
  constructor(props) {
    super(props)
    this.filterClicked = this.filterClicked.bind(this)
    this.clickedAddFriend = this.clickedAddFriend.bind(this)
  }

  filterClicked(e) {
    e.preventDefault()
    const removeFrom = $(".fl-header-selected")
    if (removeFrom) {
      removeFrom.removeClass("fl-header-selected")
    }

    const removeFromAddFriend = $(".add-friend-selected")
    if (removeFromAddFriend) {
      removeFromAddFriend.removeClass("add-friend-selected")
    }

    const jObject = $(e.currentTarget)
    jObject.addClass("fl-header-selected")

    // this.props.filterFriendsList(e)
  }

  clickedAddFriend (e) {
    e.preventDefault()

    const removeFrom = $(".fl-header-selected")
    if (removeFrom) {
      removeFrom.removeClass("fl-header-selected")
    }

    const jObject = $('.fl-header-add-friend-button')
    jObject.addClass('add-friend-selected')
  }

  render() {
    return ( 
    <div className="friends-list-header-master">
      <div className="fl-header-left">
        <div 
          className="mr-4 ml-3 px-1 fl-header-component">
          <div
            className="fl-header-friends-logo">
            <div className="person-waving">
              <svg name="PersonWaving" className="linkButtonIcon-Mlm5d6" aria-hidden="false" width="32" height="32" viewBox="0 0 24 24"><g fill="none" fillRule="evenodd"><path fill="#F6F6F6" fillRule="nonzero" d="M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z" transform="translate(2 4)"></path><path d="M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z"></path></g></svg>
            </div>
            <div className="conversation-friends-button-text">
              Friends
            </div>
          </div>
        </div>
        <div 
          data-status="ACCEPTED"
          onClick={this.filterClicked}
          className="mr-4 px-1 fl-header-component">
          <div className="disabled">Online</div>
        </div>
        <div 
          data-status="ACCEPTED"
          onClick={this.filterClicked}
          className="mr-4 px-1 fl-header-component fl-header-selected">
          All
        </div>
        <div 
          data-status="PENDING"
          onClick={this.filterClicked}
          className="mr-4 px-1 fl-header-component">
          <div className="disabled">Pending</div>
        </div>
        <div 
          data-status="BLOCKED"
          onClick={this.filterClicked}
          className="mr-4 px-1 fl-header-component">
          <div className="disabled">Blocked</div>
        </div>
        <div 
          data-status="ADDFRIEND"
          onClick={this.clickedAddFriend}
          className="mr-4 px-1 fl-add-friend-button">
          <div className="fl-header-add-friend-button disabled">Add Friend</div>
        </div>
      </div>
      <div className="fl-header-right">
        <div 
          className="ml-4 p-1 fl-header-component">
          <div className="disabled">New convo icon</div>
        </div>
        <div 
          className="ml-4 p-1 fl-header-component">
          <div className="disabled">@ notifications</div>
        </div>
        <div 
          className="ml-4 mr-4 p-1 fl-header-component">
          <div className="disabled">? help</div>
        </div>
      </div>
    </div>
    )
  }
}

export default FLHeader