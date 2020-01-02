import { GET_CHANNEL, GET_CHANNELS, CREATE_CHANNEL, UPDATE_CHANNEL, DELETE_CHANNEL } from '../actions/channels_actions'


export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case GET_CHANNEL:
      return Object.assign({}, state, { [action.channel.id]: action.channel })
    case GET_CHANNELS:
      return Object.assign({}, state, action.channels)
    case CREATE_CHANNEL:
      return Object.assign({}, state, { [action.channel.id]: action.channel })
    case UPDATE_CHANNEL:
      return Object.assign({}, state, { [action.channel.id]: action.channel })
    case DELETE_CHANNEL:
      let newState = Object.assign({}, state)
      delete newState[action.channelId.id]
      return Object.assign({}, newState);
    default:
      return state;
  }
};