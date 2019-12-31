import { connect } from 'react-redux';
import SearchBar from './search_bar';

const mapStateToProps = (state) => ({
  users: state.entities.dmUsers,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchBar);