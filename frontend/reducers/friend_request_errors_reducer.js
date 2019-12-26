import {
  CREATE_FRIEND,
  RECEIVE_ERRORS
} from "../actions/friends_actions";

export default (state = [], action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors
    case CREATE_FRIEND:
      return []
    default:
      return state;
  }
};
