import { RECEIVE_DM_USERS } from '../actions/message_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_DM_USERS:
      const newObject = {}
      action.users.forEach(user => {
        newObject[user.id] = user
      })
      return Object.assign({}, state, newObject)
    default:
      return state;
  }
};