import { connect } from 'react-redux';
import Form from './Form';
import { setQuery, searchImage } from '../../redux/actions';

const mapStateToProps = (state: any) => ({
    query: state.searchQuery.query
})

export default connect(
    mapStateToProps,
    { setQuery, searchImage }
)(Form)
