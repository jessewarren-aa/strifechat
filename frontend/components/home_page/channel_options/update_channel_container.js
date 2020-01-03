import { connect } from 'react-redux';
import UpdateChannel from './update_channel';

import { sendUpdateChannel } from '../../../actions/channels_actions'

const mapStateToProps = (state, ownProps) => {

  return {

  }
};

const mapDispatchToProps = (dispatch) => ({
  sendUpdateChannel: (channel) => dispatch(sendUpdateChannel(channel)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UpdateChannel);