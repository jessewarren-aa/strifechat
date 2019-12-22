import { connect } from 'react-redux';
import DirectMessageMain from './direct_message_main';
import { messages, get_dm_users } from '../../../../actions/message_actions'

const mapStateToProps = (state) => {
  return {
    messages: state.entities.messages,
    users: state.entities.users
  }
};

const mapDispatchToProps = (dispatch) => ({
  getMessages: () => dispatch(messages()),
  getDirectMessageUsers: () => dispatch(get_dm_users()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DirectMessageMain);