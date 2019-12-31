import { connect } from 'react-redux';
import ServerUsers from './server_users';
// import { friendSelector } from '../../../../reducers/friends_reducer'
import { sendGetServerUsers } from '../../../actions/server_users_actions'
import { users } from '../../../actions/user_actions'


const mapStateToProps = (state, ownProps) => {
  let currentServer = {id: null}
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
  
  return {
    users: state.entities.dmUsers,
    serverUsers: newServerUsers,
    currentServer: currentServer
  }
};

const mapDispatchToProps = (dispatch) => ({
  sendGetServerUsers: () => dispatch(sendGetServerUsers()),
  getUsers: () => dispatch(users())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServerUsers);