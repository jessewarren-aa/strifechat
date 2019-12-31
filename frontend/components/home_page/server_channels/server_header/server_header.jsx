import React from 'react';
// import SearchBarContainer from './search_bar/search_bar_container'

class ConversationHeader extends React.Component {
  constructor(props) {
    super(props)
    this.toggleSearchBarModal = this.toggleSearchBarModal.bind(this)
    this.togglePreferences = this.togglePreferences.bind(this)
    this.createInviteCode = this.createInviteCode.bind(this)
  }

  toggleSearchBarModal(e) {
    e.preventDefault()
    const jObjectBackground = $('.search-bar-modal-background')
    jObjectBackground.toggleClass('hidden')

    this.setState({ search: "" });

    $('.search-bar-modal-input').focus()
  }

  componentDidMount() {

  }

  togglePreferences (e) {
    e.preventDefault()
    e.stopPropagation()

    $('.server-preferences-wrapper').toggleClass('hidden')
    $('.invisible-preferences-wrapper').toggleClass('hidden')
  }

  createInviteCode (e) {
    e.preventDefault()

    let textToCopy = document.getElementById('hidden-invite-code');

    textToCopy.focus()
    textToCopy.select()
    textToCopy.setSelectionRange(0, 99999);

    document.execCommand("copy");
  }


  render() {
    const currentServer = Object.values(this.props.servers).filter(server => {
      return server.unique_id === this.props.match.params[0].split("/")[0]
    })[0]

    if (!currentServer) {
      return null
    }

    const ownerDropDown = (
      <div className="server-preferences-wrapper hidden">
        <input
          type="text"
          id="hidden-invite-code"
          defaultValue={`https://strifechat.gg/${currentServer.unique_id}`} />
        <div className="server-preferences-dropdown">
          <div 
            className="invite-button my-dropdown-item" 
            onClick={this.createInviteCode}>
              Invite People
            </div>
          <div className="disabled my-dropdown-item">server settings</div>
          <div className="disabled my-dropdown-item">create channel</div>
          <div className="disabled my-dropdown-item">change nickname</div>
          <div className="disabled my-dropdown-item">hide muted servers</div>
        </div>
      </div>
    )

    const userDropDown = (
      <div className="server-preferences-wrapper hidden">
        <div className="server-preferences-dropdown">
          <div className="disabled my-dropdown-item">change nickname</div>
          <div className="disabled my-dropdown-item">hide muted channels</div>
          <div className="disabled my-dropdown-item">leave server</div>
        </div>
      </div>
    )

    return (
      <div>
        <div className="server-bar-header-master">
          <div>{currentServer.name}</div>
          <div 
            onClick={this.togglePreferences}
            className="server-owned-preferences-icon">
              <img src="/assets/down.svg" />
          </div>
          {/* [DEV] have option triangle next to this, space-between justified */}
        </div>
        <div 
          onClick={this.togglePreferences}
          className="invisible-preferences-wrapper hidden">
        </div>
        {currentServer.owner_id === this.props.currentUser ? ownerDropDown : userDropDown}
      </div>
    )
  }
}

export default ConversationHeader
