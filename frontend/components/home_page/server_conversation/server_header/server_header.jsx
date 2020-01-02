import React from 'react';
// import { Route } from 'react-router-dom';

class ServerHeader extends React.Component {
  constructor(props) {
    super(props)
    this.toggleServerUsersList = this.toggleServerUsersList.bind(this)
  }

  toggleServerUsersList (e) {
    e.preventDefault()
    const serverUsers = $('.server-friends-master')
    const serverConvo = $('.server-conversation-master')
    const serverConvoFooter = $('.dm-footer-master ')

    if (serverUsers.hasClass('hidden')) {
      serverUsers.removeClass('hidden');
      serverConvo.width('calc(100vw - 520px)')
      serverConvoFooter.width('calc(100vw - 520px)')
    } else {
      serverUsers.addClass('hidden');
      serverConvo.width('calc(100vw - 320px)')
      serverConvoFooter.width('calc(100vw - 320px)')
    }
  }

  render() {
    return (
      <div className="server-conversation-header-master">
        <div className="sch-main">
          <div>
            <img
              className="hashtag-icon"
              src="/assets/hashtag.svg" />
            {Object.values(this.props.channels)[0].name}
          </div>

          <div>
            <img 
              onClick={this.toggleServerUsersList}
              className="toggle-users-icon" 
              src="/assets/users.svg" />
          </div>
        </div>
        <div className="sch-search">
          <form className="sch-search-form">
            <input 
              placeholder="Search"
              className="sch-search-input" 
              type="text"></input>
          </form>
        </div>
      </div>
    )
  }
}

export default ServerHeader