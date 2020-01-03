import { connect } from 'react-redux';
import DMHeader from './dm_header';

const mapStateToProps = (state) => {
  
  return {
    users: state.entities.dmUsers
  } 
};

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DMHeader);