import { connect } from 'react-redux';
import { AppState } from '../../redux/reducers';
import { selectImage } from '../../redux/actions';
import Lightbox from './Lightbox';

const getSelectedImageSelector = (state: AppState) => state.searchImages.results.find(img => img.id === state.selectImage.id) || null;

const getNextImageSelector = (state: AppState, operator: number) => {
  const index = state.searchImages.results.findIndex(img => img.id === state.selectImage.id);
  const newIndex = state.searchImages.results[index + operator]?.id;
  return newIndex || null;
};

const mapStateToProps = (state: AppState) => ({
  image: getSelectedImageSelector(state),
  nextImage: getNextImageSelector(state, 1),
  previousImage: getNextImageSelector(state, -2),
})

export default connect(
  mapStateToProps,
  { selectImage }
)(Lightbox)
