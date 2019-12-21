import { connect } from 'react-redux';
import DirectMessage from './direct_message.jsx';
import { user } from '../../../../../actions/user_actions'


const mapStateToProps = (state, ownProps) => ({
  user: ownProps.user
});

const mapDispatchToProps = (dispatch) => ({
  getUser: (userId) => dispatch(user(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DirectMessage);