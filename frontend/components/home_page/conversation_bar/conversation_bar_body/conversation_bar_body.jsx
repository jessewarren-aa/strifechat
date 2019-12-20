import React from 'react';

class ConversationBarBody extends React.Component {
  constructor(props) {
    super(props)
    this.friendsClicked = this.friendsClicked.bind(this)
  }

  friendsClicked (e) {
    e.preventDefault()
    const removeFrom = $(".friend-selected")
    if (removeFrom) {
      removeFrom.removeClass("friend-selected")
    }
    const jObject = $(e.currentTarget)
    jObject.addClass("friend-selected")
  }

  render() {
    return (
    <div className="conversation-bar-body-master">
      <div 
        className="conversation-button" 
        onClick={this.friendsClicked}>
        <div className="person-waving">
          <svg name="PersonWaving" class="linkButtonIcon-Mlm5d6" aria-hidden="false" width="32" height="32" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd"><path fill="#F6F6F6" fill-rule="nonzero" d="M0.5,0 L0.5,1.5 C0.5,5.65 2.71,9.28 6,11.3 L6,16 L21,16 L21,14 C21,11.34 15.67,10 13,10 C13,10 12.83,10 12.75,10 C8,10 4,6 4,1.5 L4,0 L0.5,0 Z M13,0 C10.790861,0 9,1.790861 9,4 C9,6.209139 10.790861,8 13,8 C15.209139,8 17,6.209139 17,4 C17,1.790861 15.209139,0 13,0 Z" transform="translate(2 4)"></path><path d="M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z M0,0 L24,0 L24,24 L0,24 L0,0 Z"></path></g></svg>
        </div>
        <div className="conversation-friends-button-text">
          Friends
        </div>
      </div>

      <div className="direct-messages-title">
        <small><div className="direct-messages-title-text">DIRECT MESSAGES</div></small>
        <div className="direct-messages-add">+</div>
      </div>

      

    </div>
    )
  }
}

export default ConversationBarBody