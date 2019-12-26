import { RECEIVE_FRIENDS } from '../actions/friends_actions';

export const friendSelector = (friendsList, friendStatus) => {
  return Object.values(friendsList).filter((user) => {
    return user.status === friendStatus
  })
}

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_FRIENDS:
      return Object.assign({}, state, action.friends);
    default:
      return state;
  }
};