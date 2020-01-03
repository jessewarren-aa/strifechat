import { connect } from 'react-redux';
import HomePage from './home_page';

import { sendGetServers, sendUpdateServer } from '../../actions/servers_actions'
import { sendDeleteChannel } from '../../actions/channels_actions'


const mapStateToProps = (state, ownProps) => ({
  servers: state.entities.servers,
  serverUsers: state.entities.serverUsers
});

const mapDispatchToProps = (dispatch) => ({
  sendGetServers: () => dispatch(sendGetServers()),
  sendUpdateServer: (server) => dispatch(sendUpdateServer(server)),
  sendDeleteChannel: (channelId) => dispatch(sendDeleteChannel(channelId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);