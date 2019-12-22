import { getMessages, getDMUsers, createMessage } from '../utils/message_utils'

export const RECEIVE_MESSAGES = "RECEIVE_MESSAGES";
export const RECEIVE_DM_USERS = "RECEIVE_DM_USERS";
export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE"

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

export const message = (message) => dispatch => createMessage(message)
  .then(
    message => dispatch(receiveMessage(message))
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