import { RECEIVE_DM_USERS } from '../actions/message_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_DM_USERS:
      return Object.assign({}, state, action.users)
    default:
      return state;
  }
};