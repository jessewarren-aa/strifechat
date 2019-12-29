import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions'

import { RECEIVE_ERRORS } from '../actions/friends_actions'

const _nullSession = {
  currentUser: null
}

export default (state = _nullSession, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      return Object.assign({}, { currentUser: action.currentUser.id })
    case LOGOUT_CURRENT_USER:
      return _nullSession;
    // case RECEIVE_ERRORS:
    //   return state
    default:
      return state;
  }
}