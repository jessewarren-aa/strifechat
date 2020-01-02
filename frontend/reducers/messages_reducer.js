import { RECEIVE_MESSAGES, RECEIVE_MESSAGE } from '../actions/message_actions';

export default (state = {}, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_MESSAGES:
      return Object.assign({}, state, action.messages);
    case RECEIVE_MESSAGE:
      console.log("received message!")
      console.log(action.message)
      console.log('current state:')
      console.log(state)
      return Object.assign({}, state, {[action.message.id]: action.message});
    default:
      return state;
  }
};