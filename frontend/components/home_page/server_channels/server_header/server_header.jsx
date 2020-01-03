import React from 'react';

import CreateChannelContainer from '../../channel_options/create_channel_container'
import UpdateChannelContainer from '../../channel_options/update_channel_container'

class ConversationHeader extends React.Component {
  constructor(props) {
    super(props)
    this.toggleSearchBarModal = this.toggleSearchBarModal.bind(this)
    this.togglePreferences = this.togglePreferences.bind(this)
    this.createInviteCode = this.createInviteCode.bind(this)

    this.leaveServer = this.leaveServer.bind(this)
    this.deleteServer = this.deleteServer.bind(this)

    this.returnToDefaultServer = this.returnToDefaultServer.bind(this)

    this.state = {
      update: {
        name: "",
        // description: ""
      }
    }
  }

  returnToDefaultServer() {
    const removeFrom = $(".server-selected")
    if (removeFrom) {
      removeFrom.removeClass("server-selected")
    }
    const jObject = $("#me")
    jObject.addClass("server-selected")

    this.props.history.push("/channels/@me")
  }

  toggleSearchBarModal(e) {
    e.preventDefault()
    const jObjectBackground = $('.search-bar-modal-background')
    jObjectBackground.toggleClass('hidden')

    this.setState({ search: "" });

    $('.search-bar-modal-input').focus()
  }

  componentDidMount() {
    this.props.sendGetServerUsers()
    this.props.getUsers()
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

  deleteServer (e) {
    e.preventDefault()
    this.props.sendDeleteServer(this.props.currentServer.id)
    this.returnToDefaultServer()
  }

  updateServer (e) {
    e.preventDefault()
  }


  leaveServer (e) {
    e.preventDefault()
    const serverUserObjectId = Object.values(this.props.serverUsers).filter(serverUser => {
      return serverUser.user_id === this.props.currentUser
    })[0].id

    this.props.sendDeleteServerUser(serverUserObjectId)
    this.returnToDefaultServer()
  }

  showCreateChannel (e) {
    e.preventDefault()

    $('.create-channel-modal-background').removeClass('hidden')
    $('.server-preferences-wrapper').addClass('hidden')
    $('.invisible-preferences-wrapper').addClass('hidden')
  }

  showServerOptions (e) {
    e.preventDefault()
    $('.update-server-modal-background').removeClass('hidden')
    $('.server-preferences-wrapper').addClass('hidden')
    $('.invisible-preferences-wrapper').addClass('hidden')
  }


  render() {
    if (!this.props.currentUser) {
      return null
    }

    const currentServer = this.props.currentServer

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
          <div 
            onClick={this.showServerOptions}
            className="my-dropdown-item">Server Settings</div>
          <div 
            onClick={this.showCreateChannel}
            className="my-dropdown-item">Create Channel</div>
          {/* <div className="disabled my-dropdown-item">hide muted channels</div> */}
          <div 
            onClick={this.deleteServer}
            className="my-dropdown-item">Delete Server</div>
        </div>
      </div>
    )

    const userDropDown = (
      <div className="server-preferences-wrapper hidden">
        <div className="server-preferences-dropdown">
          <div
            className="invite-button my-dropdown-item"
            onClick={this.createInviteCode}>
            Invite People
          </div>
          {/* <div className="disabled my-dropdown-item">hide muted channels</div> */}
          <div 
            onClick={this.leaveServer}
            className="my-dropdown-item">Leave Server</div>
        </div>
      </div>
    )

    return (
      <div>
        <UpdateChannelContainer {...this.props} />
        <CreateChannelContainer {...this.props} />
        <div className="server-bar-header-master">
          <div>{currentServer.name}</div>
          <div 
            onClick={this.togglePreferences}
            className="server-owned-preferences-icon">
              <img src="/assets/down.svg" />
          </div>
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
