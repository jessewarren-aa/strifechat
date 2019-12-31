import { connect } from 'react-redux';
import ServerJoin from './server_join';
import { sendGetServers } from '../../../../actions/servers_actions'

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.session.currentUser,
    servers: state.entities.servers
  }
};

const mapDispatchToProps = (dispatch) => ({
  sendGetServers: () => dispatch(sendGetServers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServerJoin);