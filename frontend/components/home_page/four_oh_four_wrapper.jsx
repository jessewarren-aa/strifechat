import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePageContainer from './home_page_container'

import FourOhFourContainer from '../four_oh_four/four_oh_four_container'

// import LoaderContainer from "../../../loader/loader_container"
// return <Route component={LoaderContainer} />

class FourOhFourWrapperContainer extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Switch>
        <Route exact path="/channels" component={FourOhFourContainer} />
        <Route path="/channels/*" component={HomePageContainer} />
      </Switch>
    )
  }
}

export default FourOhFourWrapperContainer