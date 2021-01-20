interface SearchState {
    query: string
}

const initialState: SearchState = {
    query: ''
}

const searchQuery = (state = initialState, action: any): SearchState => {
    switch (action.type) {
        case 'SET_QUERY':
            return ({
                ...state,
                query: action.payload
            })
        default:
            return state;
    }
}

export default searchQuery;
