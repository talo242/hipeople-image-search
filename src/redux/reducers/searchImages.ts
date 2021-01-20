interface SearchImagesState {
    results: []
}

const initialState: SearchImagesState = {
    results: []
}

const searchImages = (state = initialState, action: any): SearchImagesState => {
    switch (action.type) {
        case 'SEARCH_IMAGES':
            return ({
                ...state,
                results: action.payload
            })
        default:
            return state;
    }
}

export default searchImages;
