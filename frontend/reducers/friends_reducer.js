import { RECEIVE_FRIENDS, CREATE_FRIEND, UPDATE_FRIEND, DELETE_FRIEND } from '../actions/friends_actions';

export const friendSelector = (friendsList, friendStatus) => {
  return Object.values(friendsList).filter((user) => {
    return user.status === friendStatus
  })
}

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_FRIENDS:
      return Object.assign({}, state, action.friends.friends);
    case CREATE_FRIEND:
      return Object.assign({}, state, { [action.friend.id]: action.friend })
    case UPDATE_FRIEND:
      return Object.assign({}, state, { [action.friend.id]: action.friend })
    case DELETE_FRIEND:
      let newState = Object.assign({}, state)
      console.log(newState)
      delete newState[action.friendId.id]
      return Object.assign({}, newState);
    default:
      return state;
  }
};