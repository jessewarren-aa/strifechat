import { getMessages, getDMUsers, createMessage } from '../utils/message_utils'

export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES";
export const RECEIVE_DM_USERS = "RECEIVE_DM_USERS";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";
export const RECEIVE_MESSAGE_ERRORS = "RECEIVE_MESSAGE_ERRORS";
export const CLEAR_MESSAGE_ERRORS = "CLEAR_MESSAGE_ERRORS";

const receiveMessages = (messages) => ({
  type: RECEIVE_MESSAGES,
  messages
})

const receiveMessage = (message) => ({
  type: RECEIVE_MESSAGE,
  message
})

const receiveDMUsers = (users) => ({
  type: RECEIVE_DM_USERS,
  users
})

export const receiveErrors = errors => ({
  type: RECEIVE_MESSAGE_ERRORS,
  errors
});

export const clearErrors = () => ({
  type: CLEAR_MESSAGE_ERRORS
});

export const message = (message) => dispatch => createMessage(message)
  .then(
    message => dispatch(receiveMessage(message)),
    errors => dispatch(receiveErrors(errors.responseJSON))
  )

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