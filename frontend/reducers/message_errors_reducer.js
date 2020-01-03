import {
  CLEAR_MESSAGE_ERRORS,
  RECEIVE_MESSAGE,
  RECEIVE_MESSAGE_ERRORS
} from "../actions/message_actions";

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_MESSAGE_ERRORS:
      return action.errors
    case RECEIVE_MESSAGE:
      return []
    case CLEAR_MESSAGE_ERRORS:
      return []
    default:
      return state;
  }
};
