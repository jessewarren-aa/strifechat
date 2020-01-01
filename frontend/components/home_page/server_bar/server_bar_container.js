import { connect } from 'react-redux';
import ServerBar from './server_bar';

import { sendGetServers } from '../../../actions/servers_actions'
import { sendGetServerUsers } from '../../../actions/server_users_actions'


const userInServer = (userId, serverId, serverUsers) => {
  const serverUserObjects = Object.values(serverUsers).filter(serverUser => {
    if (serverUser.user_id === userId) {
      if (serverUser.server_id === serverId) {
        return true
      } else {
        return false
      }
    } else {
      return false
    }
  })

  if (serverUserObjects.length > 0) {
    return true
  } else {
    return false
  }
}

const mapStateToProps = (state, ownProps) => {
  const currentUserId = state.session.currentUser
  
  const filteredServers = {}
  Object.values(state.entities.servers).forEach(server => {
    if (userInServer(currentUserId, server.id, state.entities.serverUsers)) {
      filteredServers[server.id] = server
    }
  })

  console.log(state.entities.servers)

  return {
    servers: filteredServers,
    users: state.entities.users,
    serverUsers: state.entities.serverUsers
  }
};

const mapDispatchToProps = (dispatch) => ({
  sendGetServers: () => dispatch(sendGetServers()),
  sendGetServerUsers: () => dispatch(sendGetServerUsers()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServerBar);