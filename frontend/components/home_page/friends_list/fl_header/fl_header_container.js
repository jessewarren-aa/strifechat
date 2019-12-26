import { connect } from 'react-redux';
import FLHeader from './fl_header';

import { getFriendsList, filterFriends } from '../../../../actions/friends_actions'

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
  filterFriends: (status) => dispatch(filterFriends(status))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FLHeader);