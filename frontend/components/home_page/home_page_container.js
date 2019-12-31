import { connect } from 'react-redux';
import HomePage from './home_page';

import {sendGetServers} from '../../actions/servers_actions'


const mapStateToProps = (state, ownProps) => ({
  servers: state.entities.servers
});

const mapDispatchToProps = (dispatch) => ({
  sendGetServers: () => dispatch(sendGetServers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomePage);