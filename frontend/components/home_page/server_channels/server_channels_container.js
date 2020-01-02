import { connect } from 'react-redux';
import ServerChannels from './server_channels';
import { sendGetChannels } from '../../../actions/channels_actions'


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

  let filteredChannels = {}
  if (currentServer.id) {
    Object.values(state.entities.channels).forEach(channel => {
      if (channel.server_id === currentServer.id) {
        filteredChannels[channel.id] = channel
      }
    })
  } else {
    filteredChannels = state.entities.channels
  }


  return {
    users: state.entities.dmUsers,
    channels: filteredChannels
  }
};

const mapDispatchToProps = (dispatch) => ({
  sendGetChannels: () => dispatch(sendGetChannels())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServerChannels);