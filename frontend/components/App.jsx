import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LoginFormContainer from '../components/session/login_form_container';
import SignupFormContainer from '../components/session/signup_form_container';
import SplashPageContainer from '../components/splash_page/splash_page_container';
import FourOhFourWrapperContainer from '../components/home_page/four_oh_four_wrapper_container'

import FourOhFourContainer from './four_oh_four/four_oh_four_container'


import { AuthRoute, ProtectedRoute } from '../utils/route_utils';

class App extends React.Component {
  constructor (props) {
    super(props)
    this.store = this.props.store
  }

  render () {
    return <div>
      {/* <UserCardContainer /> */}
      <Switch>
        <Route exact path="/" component={ SplashPageContainer } />
        <AuthRoute exact path="/login" component={ LoginFormContainer } />
        <AuthRoute exact path="/signup" component={ SignupFormContainer } />
        <ProtectedRoute path="/channels" component={ FourOhFourWrapperContainer } />
        <Route path="*" component={FourOhFourContainer} />
      </Switch>
    </div>
  }
}

export default App