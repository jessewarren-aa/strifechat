import { RECEIVE_FRIENDS } from '../actions/friends_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_FRIENDS:
      return Object.assign({}, state, action.friends);
    default:
      return state;
  }
};