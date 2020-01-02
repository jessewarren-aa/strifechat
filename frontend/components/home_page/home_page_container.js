import { connect } from 'react-redux';
import HomePage from './home_page';

import { sendGetServers, sendUpdateServer } from '../../actions/servers_actions'


const mapStateToProps = (state, ownProps) => ({
  servers: state.entities.servers
});

const mapDispatchToProps = (dispatch) => ({
  sendGetServers: () => dispatch(sendGetServers()),
  sendUpdateServer: (server) => dispatch(sendUpdateServer(server))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);