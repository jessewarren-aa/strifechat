import { connect } from 'react-redux';
import ConversationHeader from './conversation_header';


const mapStateToProps = (state) => ({
  users: state.entities.users,
  messages: state.entities.messages
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConversationHeader);