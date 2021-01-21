import { Dispatch } from 'redux';
import { SET_QUERY, SEARCH_IMAGES, FETCH_MORE, SELECT_IMAGE } from './actionTypes';
import { searchImageService } from '../api';

export const setQuery = (query: string) => ({
    type: SET_QUERY,
    payload: query,
})

export const searchImage = (query: string, page = 1) => async (dispatch: Dispatch) => {
    const images = await searchImageService(query, page);

    if (page === 1) {
        dispatch({
            type: SEARCH_IMAGES,
            payload: images.results
        })
    } else {
        dispatch({
            type: FETCH_MORE,
            payload: images.results
        })
    }
};

export const selectImage = (image: string | null) => ({
    type: SELECT_IMAGE,
    payload: image,
})
