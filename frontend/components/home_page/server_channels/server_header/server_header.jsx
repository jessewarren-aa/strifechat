import React from 'react';
// import SearchBarContainer from './search_bar/search_bar_container'

class ConversationHeader extends React.Component {
  constructor(props) {
    super(props)
    this.toggleSearchBarModal = this.toggleSearchBarModal.bind(this)
    this.togglePreferences = this.togglePreferences.bind(this)
    this.createInviteCode = this.createInviteCode.bind(this)

    this.leaveServer = this.leaveServer.bind(this)
    this.deleteServer = this.deleteServer.bind(this)

    this.returnToDefaultServer = this.returnToDefaultServer.bind(this)
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
    // this.modalHide()
  }

  // modalHide(slideHide = true) {

  //   if (slideHide) {
  //     $('#primary-modal-server-options').show("slide", { direction: "right" }, 0);
  //   }

  //   $('#slideable-join-form').addClass("hidden");
  //   $('#slideable-create-form').addClass("hidden");

  //   $('#slideable-join-form').removeClass("animated bounceIn");
  //   $('#slideable-create-form').removeClass("animated bounceIn");

  //   const jServerOptionsModal = $('.server-options-modal-background')
  //   jServerOptionsModal.addClass('hidden')

  //   const removeFrom = $(".server-selected")
  //   if (removeFrom) {
  //     removeFrom.removeClass("server-selected")
  //   }

  //   const jObject = $(`#${this.props.match.params[0].split("/")[0].replace("@", "")}`)
  //   jObject.addClass("server-selected")
  // }

  leaveServer (e) {
    e.preventDefault()
    const serverUserObjectId = Object.values(this.props.serverUsers).filter(serverUser => {
      return serverUser.user_id === this.props.currentUser
    })[0].id

    this.props.sendDeleteServerUser(serverUserObjectId)
    this.returnToDefaultServer()
    // this.modalHide()
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
          <div className="disabled my-dropdown-item">server settings</div>
          <div className="disabled my-dropdown-item">create channel</div>
          <div className="disabled my-dropdown-item">hide muted channels</div>
          <div 
            onClick={this.deleteServer}
            className="my-dropdown-item">delete server</div>
        </div>
      </div>
    )

    const userDropDown = (
      <div className="server-preferences-wrapper hidden">
        <div className="server-preferences-dropdown">
          <div className="disabled my-dropdown-item">hide muted channels</div>
          <div 
            onClick={this.leaveServer}
            className="my-dropdown-item">leave server</div>
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
