import * as ServerAPIUtils from '../utils/server_utils'

export const GET_SERVER = "GET_SERVER";
export const GET_SERVERS = "GET_SERVERS";

const getServer = (server) => ({
  type: GET_SERVER,
  server
})

const getServers = (servers) => ({
  type: GET_SERVERS,
  servers
})

export const sendGetServer = (server) => dispatch => ServerAPIUtils.getServer(server)
  .then(
    server => dispatch(getServer(server)),
    // errors => dispatch(receiveErrors(errors.responseJSON))
  )

export const sendGetServers = () => dispatch => ServerAPIUtils.getServers()
  .then(
    servers => dispatch(getServers(servers)),
    // errors => dispatch(receiveErrors(errors.responseJSON))
  )