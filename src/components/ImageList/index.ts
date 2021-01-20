import { connect } from 'react-redux';
import ImageList from './ImageList';

const mapStateToProps = (state: any) => ({
  images: state.searchImages.results
})

export default connect(
  mapStateToProps
)(ImageList)
