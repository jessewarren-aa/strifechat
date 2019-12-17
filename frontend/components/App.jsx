import React from 'react';
// import { Route } from 'react-router-dom';

import LoginFormContainer from '../components/session/login_form_container';
import SignupFormContainer from '../components/session/signup_form_container';

import UserCardContainer from './user_card/user_card_container'

import { AuthRoute } from '../utils/route_utils';

export default () => (
  <div>
    {/* <Route path="/" component={NavBarContainer} /> */}
    Hey, I loaded the root App! Nicely done.
    <UserCardContainer />

    <AuthRoute path="/login" component={LoginFormContainer} />
    <AuthRoute path="/signup" component={SignupFormContainer} />
  </div>
);
