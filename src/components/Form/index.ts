import { connect } from 'react-redux';
import Form from './Form';
import { setQuery, searchImage } from '../../redux/actions';
import { AppState } from '../../redux/reducers';

const mapStateToProps = (state: AppState) => ({
    query: state.searchQuery.query
})

export default connect(
    mapStateToProps,
    { setQuery, searchImage }
)(Form)
