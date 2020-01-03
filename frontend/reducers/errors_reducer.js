import { combineReducers } from "redux";

import sessionErrorsReducer from "./session_errors_reducer";
import friendRequestErrorsReducer from './friend_request_errors_reducer'
import messageErrorsReducer from './message_errors_reducer'

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  friendRequests: friendRequestErrorsReducer,
  messages: messageErrorsReducer
});

export default errorsReducer;
