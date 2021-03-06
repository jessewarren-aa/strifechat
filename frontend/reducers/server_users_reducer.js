import { GET_SERVER_USER, GET_SERVER_USERS, CREATE_SERVER_USER, DELETE_SERVER_USER } from '../actions/server_users_actions'
import { CREATE_SERVER } from '../actions/servers_actions'


export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case GET_SERVER_USER:
      return Object.assign({}, state, { [action.serverUser.id]: action.serverUser })
    case GET_SERVER_USERS:
      return Object.assign({}, state, action.serverUsers)
    case CREATE_SERVER:
      return Object.assign({}, state, { [action.join.id]: action.join })
    case CREATE_SERVER_USER:
      return Object.assign({}, state, { [action.serverUser.id]: action.serverUser })
    case DELETE_SERVER_USER:
      let newState = Object.assign({}, state)
      delete newState[action.serverUserId.id]
      return Object.assign({}, newState);
    default:
      return state;
  }
};