import { connect } from 'react-redux';
import ServerFriends from './server_friends';
// import { friendSelector } from '../../../../reducers/friends_reducer'


const mapStateToProps = (state, ownProps) => ({
  users: state.entities.users,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServerFriends);