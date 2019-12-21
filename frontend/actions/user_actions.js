import { getUser } from '../utils/user_utils'

export const RECEIVE_USER = "RECEIVE_USER";

const receiveUser = (user) => ({
  type: RECEIVE_USER,
  user
})


export const user = (userId) => dispatch => getUser(userId)
  .then(
    user => dispatch(receiveUser(user)),
    // errors => dispatch(receiveErrors(errors.responseJSON))
  );