import * as ServerAPIUtils from '../utils/server_utils'

export const GET_SERVER = "GET_SERVER";
export const GET_SERVERS = "GET_SERVERS";

export const CREATE_SERVER = "CREATE_SERVER";
export const UPDATE_SERVER = "UPDATE_SERVER";
export const DELETE_SERVER = "DELETE_SERVER";

const getServer = (server) => ({
  type: GET_SERVER,
  server
})

const getServers = (servers) => ({
  type: GET_SERVERS,
  servers
})

const createServer = (server) => ({
  type: CREATE_SERVER,
  server
})

const updateServer = (server) => ({
  type: UPDATE_SERVER,
  server
})

const deleteServer = (serverId) => ({
  type: DELETE_SERVER,
  serverId
})

export const sendGetServer = (server) => dispatch => ServerAPIUtils.getServer(server)
  .then(
    server => dispatch(getServer(server)),
    // errors => dispatch(receiveErrors(errors.responseJSON))
  )

export const sendGetServers = () => dispatch => {
  ServerAPIUtils.getServers()
  .then(
    servers => dispatch(getServers(servers)),
    // errors => dispatch(receiveErrors(errors.responseJSON))
  )
}

export const sendCreateServer = (server) => dispatch => ServerAPIUtils.postServer(server)
  .then(
    server => dispatch(createServer(server))
  )

export const sendUpdateServer = (server) => dispatch => ServerAPIUtils.patchServer(server)
  .then(
    server => dispatch(updateServer(server))
  )

export const sendDeleteServer = (serverId) => dispatch => ServerAPIUtils.deleteServer(serverId)
  .then(
    serverId => dispatch(deleteServer(serverId))
  )