import { connect } from 'react-redux';
import DirectMessage from './direct_message.jsx';
import { user } from '../../../../../actions/user_actions'


const mapStateToProps = (state, ownProps) => {
  // console.log(state)
  // console.log(ownProps)
  return {

  }
};

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DirectMessage);