import Image from "../../interfaces/Image/Image.interface";
import { SEARCH_IMAGES, FETCH_MORE } from "../actionTypes";

interface SearchImagesState {
    results: Image[]
}

interface SearchImagesAction {
    type: typeof SEARCH_IMAGES | typeof FETCH_MORE;
    payload: Image[]
}

const initialState: SearchImagesState = {
    results: []
}

const searchImages = (state = initialState, action: SearchImagesAction): SearchImagesState => {
    switch (action.type) {
        case SEARCH_IMAGES:
            return ({
                ...state,
                results: action.payload
            })
        case FETCH_MORE:
            return ({
                ...state,
                results: state.results.concat(action.payload)
            })
        default:
            return state;
    }
}

export default searchImages;
