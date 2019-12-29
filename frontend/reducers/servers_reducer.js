import { GET_SERVER, GET_SERVERS, CREATE_SERVER, UPDATE_SERVER, DELETE_SERVER } from '../actions/servers_actions'


export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case GET_SERVER:
      return Object.assign({}, state, { [action.server.id]:action.server })
    case GET_SERVERS:
      return Object.assign({}, state, action.servers)
    case CREATE_SERVER:
      return Object.assign({}, state, { [action.server.id]: action.server })
    case UPDATE_SERVER:
      return Object.assign({}, state, { [action.server.id]: action.server })
    case DELETE_SERVER:
      let newState = Object.assign({}, state)
      newState.delete(action.serverId)
      return Object.assign({}, newState);
    default:
      return state;
  }
};