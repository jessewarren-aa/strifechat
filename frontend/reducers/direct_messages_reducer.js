import { RECEIVE_DM_USERS } from '../actions/message_actions';
import { RECEIVE_FRIENDS } from '../actions/friends_actions'

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_DM_USERS:
      const newObject = {}
      action.users.forEach(user => {
        newObject[user.id] = user
      })
      return Object.assign({}, state, newObject)
    case RECEIVE_FRIENDS:
      return Object.assign({}, state, action.friends.users)
    default:
      return state;
  }
};