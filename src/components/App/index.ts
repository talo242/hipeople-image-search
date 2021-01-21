import { connect } from 'react-redux';
import { AppState } from '../../redux/reducers';
import App from './App';

const mapStateToProps = (state: AppState) => ({
  selectedImage: state.selectImage.id,
})

export default connect(
  mapStateToProps,
)(App)
