import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ServerBarContainer from './server_bar/server_bar_container'
import ConversationBarContainer from './conversation_bar/conversation_bar_container'
import ConversationViewContainer from './conversation_view/conversation_view_container'
import FriendsListContainer from './friends_list/friends_list_container'


// import LoaderContainer from "../../../loader/loader_container"
// return <Route component={LoaderContainer} />

class HomePage extends React.Component {
  constructor(props) {
    super(props)

    this.preventBubbling = this.preventBubbling.bind(this)
    this.modalHide = this.modalHide.bind(this)
  }

  modalHide (e) {
    e.preventDefault()
    const jServerOptionsModal = $('.server-options-modal-background')
    jServerOptionsModal.addClass('hidden')

    const removeFrom = $(".server-selected")
    if (removeFrom) {
      removeFrom.removeClass("server-selected")
    }

    const jObject = $("#default-server")
    jObject.addClass("server-selected")
  }

  preventBubbling (e) {
    e.stopPropagation()
  }

  render() {
    return (
    <div className="home-page-master">
      <div 
        onClick={this.modalHide}
        className="server-options-modal-background hidden">
        <div 
          onClick={this.preventBubbling}
          className="server-options-modal">
          <div className="server-options-title">REALLY? ANOTHER SERVER?</div>
          <div className="server-options-control">
            <div className="server-options-create">
              <div className="so-title blue-font">CREATE</div>
              <div className="so-text text-center">
                <small>
                  Create a new server and invite your friends! It's free™!
                </small>
              </div>
              <div className="so-create-icon">
                <img
                  src={window.create}></img>
              </div>
              <div className="so-create-button">
                Create a server
              </div>
            </div>
            <div className="server-options-join">
              <div className="so-title green-font">JOIN</div>
              <div className="so-text text-center">
                <small>
                  Enter an invite code and join your enemy's server!
                </small>
              </div>
              <div className="so-join-icon">
                <img
                  src={window.join}></img>
              </div>
              <div className="so-join-button">
                Join a server
              </div>
            </div>
          </div>
        </div>
      </div>
      <Route path="/channels/*" component={ServerBarContainer} />
      <Route exact path="/channels/*" component={ConversationBarContainer} />
      <Switch>
        <Route exact path="/channels/@me" component={FriendsListContainer} />
        <Route path="/channels/@me/*" component={ConversationViewContainer} />
      </Switch>
      {/* <Route exact path="/channels/*" component={FriendsListContainer} /> */}

      {/* [DEV] server views! */}
      

    </div>
    )
  }
}

export default HomePage