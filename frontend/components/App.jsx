import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LoginFormContainer from '../components/session/login_form_container';
import SignupFormContainer from '../components/session/signup_form_container';
import SplashPageContainer from '../components/splash_page/splash_page_container';
import HomePageContainer from '../components/home_page/home_page_container'


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
        <ProtectedRoute path="/channels" component={ HomePageContainer } />
        {/* <Route path="*" component={NotFound} /> */}
      </Switch>
    </div>
  }
}

export default App