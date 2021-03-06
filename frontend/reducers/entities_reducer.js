import { combineReducers } from 'redux';
import messagesReducer from './messages_reducer'
import directMessagesReducer from './direct_messages_reducer'
import userReducer from './user_reducer'
import friendsReducer from './friends_reducer'
import serversReducer from './servers_reducer'
import serverUsersReducer from './server_users_reducer'
import channelsReducer from './channels_reducer'

const entitiesReducer = combineReducers({
  messages: messagesReducer,
  dmUsers: directMessagesReducer,
  users: userReducer,
  channels: channelsReducer,
  friendRequests: friendsReducer,
  servers: serversReducer,
  serverUsers: serverUsersReducer
});

export default entitiesReducer;