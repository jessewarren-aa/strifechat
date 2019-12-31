import { getUser, getUsers } from '../utils/user_utils'

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USERS = "RECEIVE_USERS"

const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
})

const receiveUsers = (user) => ({
  type: RECEIVE_USERS,
  user
})


export const user = (userId) => dispatch => getUser(userId)
  .then(
    user => dispatch(receiveUser(user)),
    // errors => dispatch(receiveErrors(errors.responseJSON))
  );

export const users = () => dispatch => getUsers()
  .then(
    users => dispatch(receiveUsers(users)),
    // errors => dispatch(receiveErrors(errors.responseJSON))
  );