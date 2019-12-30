import React from 'react';
import { Route, Switch } from 'react-router-dom';
import ServerBarContainer from './server_bar/server_bar_container'
import ConversationBarContainer from './conversation_bar/conversation_bar_container'
import ConversationViewContainer from './conversation_view/conversation_view_container'
import FriendsListContainer from './friends_list/friends_list_container'

import ServerPlusContainer from './server_plus/server_plus_container'


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
      <ServerPlusContainer />
      <Route path="/channels/*" component={ServerBarContainer} />
      <Route exact path="/channels/*" component={ConversationBarContainer} />
      {/* [DEV] maybe an if statement using props match to check if @me or not - to determine if displaying users or channels */}
      <Switch>
        <Route exact path="/channels/@me" component={FriendsListContainer} />
        <Route path="/channels/@me/*" component={ConversationViewContainer} />
      </Switch>

      {/* <Route exact path="/channels/*" component={Servers} /> */}
      {/* [DEV] server views! */}
      
    </div>
    )
  }
}

export default HomePage