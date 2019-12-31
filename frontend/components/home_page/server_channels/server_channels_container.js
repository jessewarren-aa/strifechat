import { connect } from 'react-redux';
import ServerChannels from './server_channels';
// import { friendSelector } from '../../../../reducers/friends_reducer'


const mapStateToProps = (state, ownProps) => ({
  users: state.entities.dmUsers,
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServerChannels);