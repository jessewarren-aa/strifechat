import { combineReducers } from 'redux';
import messagesReducer from './messages_reducer'
import directMessagesReducer from './direct_messages_reducer'
// import userReducer from './user_reducer'
import friendsReducer from './friends_reducer'
import serversReducer from './servers_reducer'

const entitiesReducer = combineReducers({
  messages: messagesReducer,
  users: directMessagesReducer,
  friendRequests: friendsReducer,
  servers: serversReducer
});

export default entitiesReducer;