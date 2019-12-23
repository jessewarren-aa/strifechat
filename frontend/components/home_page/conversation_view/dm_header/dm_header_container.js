import { connect } from 'react-redux';
import DMHeader from './dm_header';

const mapStateToProps = (state) => {
  
  // console.log(state)
  return {
    users: state.entities.users,
  } 
};

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DMHeader);