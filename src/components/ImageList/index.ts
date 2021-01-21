import { connect } from 'react-redux';
import { AppState } from '../../redux/reducers';
import ImageList from './ImageList';
import { searchImage, selectImage } from '../../redux/actions';

const mapStateToProps = (state: AppState) => ({
  query: state.searchQuery.query,
  images: state.searchImages.results,
})

export default connect(
  mapStateToProps,
  { searchImage, selectImage }
)(ImageList)
