import { getMessages, getDMUsers } from '../utils/message_utils'

export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES";
export const RECEIVE_DM_USERS = "RECEIVE_DM_USERS";

const receiveMessages = (messages) => ({
  type: RECEIVE_MESSAGES,
  messages
})

const receiveDMUsers = (users) => ({
  type: RECEIVE_DM_USERS,
  users
})


export const messages = () => dispatch => getMessages()
  .then(
    messages => dispatch(receiveMessages(messages)),
    // errors => dispatch(receiveErrors(errors.responseJSON))
  );

export const get_dm_users = () => dispatch => getDMUsers()
  .then(
    users => dispatch(receiveDMUsers(users)),
    // errors => dispatch(receiveErrors(errors.responseJSON))
  );