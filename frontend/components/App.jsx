import React from 'react';
import { Route, Switch } from 'react-router-dom';

import LoginFormContainer from '../components/session/login_form_container';
import SignupFormContainer from '../components/session/signup_form_container';
import SplashPageContainer from '../components/splash_page/splash_page_container';
import UserCardContainer from './user_card/user_card_container';

import { AuthRoute } from '../utils/route_utils';
import { login } from '../actions/session_actions';

class App extends React.Component {
  constructor (props) {
    super(props)
    this.store = this.props.store
  }

  render () {
    return <div>
      {/* <UserCardContainer /> */}

      <Switch>
        <Route exact path="/" component={SplashPageContainer} />
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        {/* <Route path="*" component={NotFound} /> */}
      </Switch>
    </div>
  }
}

export default App