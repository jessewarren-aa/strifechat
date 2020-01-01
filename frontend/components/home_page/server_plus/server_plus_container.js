import { connect } from 'react-redux';
import ServerPlus from './server_plus';
import {sendCreateServerUser} from '../../../actions/server_users_actions'
import {sendGetServers, sendCreateServer} from '../../../actions/servers_actions'

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    servers: state.entities.servers
  }
};

const mapDispatchToProps = (dispatch) => ({
  sendCreateServerUser: (serverUser) => dispatch(sendCreateServerUser(serverUser)),
  sendGetServers: () => dispatch(sendGetServers()),
  sendCreateServer: (server) => dispatch(sendCreateServer(server))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServerPlus);