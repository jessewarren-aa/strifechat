import { connect } from 'react-redux';
import FooterCTA from './footer_cta';


const mapStateToProps = (state) => ({
  currentUser: state.entities.dmUsers[state.session.currentUser]
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FooterCTA);