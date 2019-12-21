import { RECEIVE_MESSAGES } from '../actions/message_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_MESSAGES:
      return Object.assign({}, state, action.messages);
    default:
      return state;
  }
};