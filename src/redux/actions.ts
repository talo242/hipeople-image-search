import { Dispatch } from 'redux';
import { SET_QUERY, SEARCH_IMAGES } from './actionTypes';
import { searchImageService } from '../api';

export const setQuery = (query: string) => ({
    type: SET_QUERY,
    payload: query,
})

export const searchImage = (query: string) => async (dispatch: Dispatch) => {
    const images = await searchImageService(query, 1);
    dispatch({
        type: SEARCH_IMAGES,
        payload: images.results
    })
};
