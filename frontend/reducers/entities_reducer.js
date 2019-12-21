import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import messagesReducer from './messages_reducer'
import directMessagesReducer from './direct_messages_reducer'
// import userReducer from './user_reducer'

const entitiesReducer = combineReducers({
  users: usersReducer,
  // user: userReducer,
  messages: messagesReducer,
  users: directMessagesReducer
});

export default entitiesReducer;