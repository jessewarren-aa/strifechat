import { connect } from 'react-redux';
import ServerHeader from './server_header';


const mapStateToProps = (state, ownProps) => {
  let currentChannel = { name: null }
  if (ownProps.match) {
    currentChannel = Object.values(state.entities.channels).filter(channel => {
      return channel.unique_id === ownProps.match.params[0].split("/")[1]
    })[0]
  }

  if (!currentChannel) {
    currentChannel = { name: null }
  }

  return {
    channels: { [currentChannel.id]: currentChannel }
  }
};

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServerHeader);