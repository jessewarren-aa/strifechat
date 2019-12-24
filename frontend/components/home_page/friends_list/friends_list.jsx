import React from 'react';
import { Route } from 'react-router-dom';

import FLHeaderContainer from './fl_header/fl_header_container'
import FLBodyContainer from './fl_body/fl_body_container'

class FriendsList extends React.Component {
  constructor(props) {
    super(props)
  }

  // filterClicked(e) {
  //   e.preventDefault()
  //   const removeFrom = $(".fl-header-selected")
  //   if (removeFrom) {
  //     removeFrom.removeClass("fl-header-selected")
  //   }
  //   const jObject = $(e.currentTarget)
  //   jObject.addClass("fl-header-selected")

  //   // this.props.filterFriendsList(e)
  // }

  render() {
    return <div className="friends-list-master">
      {/* <Route exact path="/channels/@me" render={(props) => <FLHeaderContainer {...props} />} /> */}

      <Route exact path="/channels/@me" component={FLHeaderContainer} />
      <Route exact path="/channels/@me" component={FLBodyContainer} />
    </div>
  }
}

export default FriendsList