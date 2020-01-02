import { connect } from 'react-redux';
import ServerBarBody from './server_bar_body';



const mapStateToProps = (state, ownProps) => {
  let user = state.entities.dmUsers[state.session.currentUser]

  return {
    friendCode: user ? user.friend_code : null
  }
};

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ServerBarBody);