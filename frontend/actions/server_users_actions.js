import * as ServerUserAPIUtils from '../utils/server_users_utils'

export const GET_SERVER_USER = "GET_SERVER_USER";
export const GET_SERVER_USERS = "GET_SERVER_USERS";

export const CREATE_SERVER_USER = "CREATE_SERVER_USER";
export const DELETE_SERVER_USER = "DELETE_SERVER_USER";

const getServerUser = (serverUser) => ({
  type: GET_SERVER_USER,
  serverUser
})

const getServerUsers = (serverUsers) => ({
  type: GET_SERVER_USERS,
  serverUsers
})

const createServerUser = (serverUser) => ({
  type: CREATE_SERVER_USER,
  serverUser
})

const deleteServerUser = (serverUserId) => ({
  type: DELETE_SERVER_USER,
  serverUserId
})

export const sendGetServerUser = (serverUser) => dispatch =>
  ServerUserAPIUtils.getServerUser(serverUser)
    .then(
      serverUser => dispatch(getServerUser(serverUser)),
      // errors => dispatch(receiveErrors(errors.responseJSON))
    )

export const sendGetServerUsers = () => dispatch => {
  ServerUserAPIUtils.getServerUsers()
    .then(
      serverUsers => dispatch(getServerUsers(serverUsers)),
      // errors => dispatch(receiveErrors(errors.responseJSON))
    )
}

export const sendCreateServerUser = (serverUser) => dispatch =>
  ServerUserAPIUtils.postServerUser(serverUser)
    .then(
      serverUser => dispatch(createServerUser(serverUser))
    )

export const sendDeleteServerUser = (serverUserId) => dispatch =>
  ServerUserAPIUtils.deleteServerUser(serverUserId)
    .then(
      serverUserId => dispatch(deleteServerUser(serverUserId))
    )