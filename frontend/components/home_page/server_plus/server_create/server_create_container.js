import { connect } from 'react-redux';
import ServerCreate from './server_create';
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
)(ServerCreate);