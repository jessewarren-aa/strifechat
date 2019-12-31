import { connect } from 'react-redux';
import ServerHeader from './server_header';



const mapStateToProps = (state) => ({
  servers: state.entities.servers,
  users: state.entities.dmUsers,
  currentUser: state.session.currentUser
});

// [DEV] eventually, servers should be filtered by if the user is in them or not
// [DEV] right now, all servers are visible to all users

const mapDispatchToProps = (dispatch) => ({
  
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServerHeader);