import { connect } from 'react-redux';
import CreateChannel from './create_channel';

import { sendCreateChannel } from '../../../actions/channels_actions'

const mapStateToProps = (state, ownProps) => {
  return {

  }
};

const mapDispatchToProps = (dispatch) => ({
  sendCreateChannel: (channel) => dispatch(sendCreateChannel(channel))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateChannel);