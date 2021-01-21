import { SET_QUERY } from "../actionTypes";

interface SearchState {
  query: string
}

interface SearchAction {
  type: typeof SET_QUERY;
  payload: string;
}

const initialState: SearchState = {
  query: ''
}

const searchQuery = (state = initialState, action: SearchAction): SearchState => {
  switch (action.type) {
    case SET_QUERY:
      return ({
        ...state,
        query: action.payload
      })
    default:
      return state;
  }
}

export default searchQuery;
