import { connect } from 'react-redux';
import ServerHeader from './server_header';

import { sendDeleteServerUser, sendGetServerUsers } from '../../../../actions/server_users_actions'
import { sendDeleteServer } from '../../../../actions/servers_actions'
import { users } from '../../../../actions/user_actions'



const mapStateToProps = (state, ownProps) => {
  let currentServer = { id: null }
  if (ownProps.match) {
    currentServer = Object.values(state.entities.servers).filter(server => {
      return server.unique_id === ownProps.match.params[0].split("/")[0]
    })[0]
  }

  if (!currentServer) {
    currentServer = { id: null }
  }

  let newServerUsers = {}
  if (currentServer.id) {
    Object.values(state.entities.serverUsers).forEach(serverUser => {
      if (serverUser.server_id === currentServer.id) {
        newServerUsers[serverUser.id] = serverUser
      }
    })
  } else {
    newServerUsers = state.entities.serverUseres
  }

  let filteredUsers = {}
  if (newServerUsers) {
    Object.values(state.entities.users).forEach(user => {
      if (Object.values(newServerUsers).map(su => {
        return su.user_id
      }).includes(user.id)) {
        filteredUsers[user.id] = user
      }
    })
  }

  return {
    users: filteredUsers,
    serverUsers: newServerUsers,
    currentUser: state.session.currentUser,
    currentServer: currentServer
  }
};

const mapDispatchToProps = (dispatch) => ({
  sendDeleteServerUser: (serverId) => dispatch(sendDeleteServerUser(serverId)),
  sendGetServerUsers: () => dispatch(sendGetServerUsers()),
  getUsers: () => dispatch(users()),
  sendDeleteServer: (serverId) => dispatch(sendDeleteServer(serverId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServerHeader);