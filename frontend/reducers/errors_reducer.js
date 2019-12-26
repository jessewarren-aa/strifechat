import { combineReducers } from "redux";

import sessionErrorsReducer from "./session_errors_reducer";
import friendRequestReducer from './friend_request_errors_reducer'

const errorsReducer = combineReducers({
  session: sessionErrorsReducer,
  friendRequests: friendRequestReducer
});

export default errorsReducer;
