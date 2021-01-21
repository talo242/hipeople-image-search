import { connect } from 'react-redux';
import { AppState } from '../../redux/reducers';
import { selectImage } from '../../redux/actions';
import Lightbox from './Lightbox';

const mapStateToProps = (state: AppState) => ({
  image: state.selectImage.image,
})

export default connect(
  mapStateToProps,
  { selectImage }
)(Lightbox)
