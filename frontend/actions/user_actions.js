import { getUser, getUsers, patchUser } from '../utils/user_utils'

export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_USERS = "RECEIVE_USERS";
export const UPDATE_USER = "UPDATE_USER";

const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
})

const receiveUsers = (users) => ({
  type: RECEIVE_USERS,
  users
})

const updateUser = (user) => ({
  type: UPDATE_USER,
  user
})

export const user = (userId) => dispatch => getUser(userId)
  .then(
    user => dispatch(receiveUser(user)),
    // errors => dispatch(receiveErrors(errors.responseJSON))
  );

export const users = () => dispatch => {
  return getUsers()
  .then(
    users => dispatch(receiveUsers(users)),
    // errors => dispatch(receiveErrors(errors.responseJSON))
  )
}

export const sendUpdateUser = (user) => dispatch => {
  return patchUser(user)
    .then(
      user => dispatch(updateUser(user)),
      // errors => dispatch(receiveErrors(errors.responseJSON))
    )
}