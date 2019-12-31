import { connect } from 'react-redux';
import ServerBar from './server_bar';

import { sendGetServers } from '../../../actions/servers_actions'


const mapStateToProps = (state, ownProps) => {
  return {
    servers: state.entities.servers
  }
};

const mapDispatchToProps = (dispatch) => ({
  sendGetServers: () => dispatch(sendGetServers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServerBar);