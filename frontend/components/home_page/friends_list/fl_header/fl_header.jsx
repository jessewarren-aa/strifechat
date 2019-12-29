import React from 'react';

class FLHeader extends React.Component {
  constructor(props) {
    super(props)
    this.filterClicked = this.filterClicked.bind(this)
    this.clickedAddFriend = this.clickedAddFriend.bind(this)
    this.newMessagePrompt = this.newMessagePrompt.bind(this)
    this.stopBubble = this.stopBubble.bind(this)
  }

  stopBubble (e) {
    e.preventDefault()
    e.stopPropagation()
  }

  componentDidMount () {
    this.props.filterFriends("ACCEPTED")
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

    this.props.filterFriends(e.currentTarget.getAttribute('value'))
  }

  clickedAddFriend (e) {
    e.preventDefault()

    const removeFrom = $(".fl-header-selected")
    if (removeFrom) {
      removeFrom.removeClass("fl-header-selected")
    }

    const jObject = $('.fl-header-add-friend-button')
    jObject.addClass('add-friend-selected')

    this.props.filterFriends(e.currentTarget.getAttribute('value'))
  }

  newMessagePrompt (e) {
    e.preventDefault()
    const jObject = $('.start-new-message-popup-background')
    jObject.toggleClass('hidden')
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
          value="ACCEPTED"
          onClick={this.filterClicked}
          className="mr-4 px-1 fl-header-component">
          <div className="disabled">Online</div>
        </div>
        <div 
          value="ACCEPTED"
          onClick={this.filterClicked}
          className="mr-4 px-1 fl-header-component fl-header-selected">
          All
        </div>
        <div 
          value="PENDING"
          onClick={this.filterClicked}
          className="mr-4 px-1 fl-header-component">
          <div>Pending</div>
        </div>
        <div 
          value="BLOCKED"
          onClick={this.filterClicked}
          className="mr-4 px-1 fl-header-component">
          <div>Blocked</div>
        </div>
        <div 
          value="ADDFRIEND"
          onClick={this.clickedAddFriend}
          className="mr-4 px-1 fl-add-friend-button">
          <div className="fl-header-add-friend-button">Add Friend</div>
        </div>
      </div>
      <div className="fl-header-right">
        <div 
          onClick={this.newMessagePrompt}
          className="ml-4 p-1 fl-header-component-hoverless flex-end">
          <div>
            <img className="new-message-icon" src={window.convo}></img>
            <img className="smol-icon" src={window.plus}></img>
          </div>
          <div 
            onClick={this.stopBubble}
            className="hidden start-new-message-popup-background">
            <div 
              className="start-new-message-popup">
              <div className="snmp-text-box">
                <div className="snmp-text-box-title">SELECT FRIENDS</div>
                <div className="snmp-text-box-text">
                  <small>
                    You can add 1 more friend (group chat isn't a thing yet).
                  </small>
                </div>
              </div>

              <div className="snmp-input-div">
                <form className="snmp-form-div">
                  <input 
                    className="snmp-input"
                    placeholder="Type the username of a friend"></input>
                </form>
              </div>

              <div className="snmp-friend-list">
                friend filter!
              </div>

                <div className="snmp-button-div">
                create message button!
              </div>

            </div>
          </div>
        </div>
        <div 
          className="ml-4 p-1 fl-header-component">
          <div className="disabled">@</div>
        </div>
        <div 
          className="ml-4 mr-4 p-1 fl-header-component">
          <div className="disabled">?</div>
        </div>
      </div>
    </div>
    )
  }
}

export default FLHeader