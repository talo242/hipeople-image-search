import { SELECT_IMAGE } from "../actionTypes";
interface SelectImage {
  id: string | null;
}

interface SelectImageAction {
  type: typeof SELECT_IMAGE;
  payload: string | null;
}

const initialState: SelectImage = {
  id: null
}

const selectImage = (state = initialState, action: SelectImageAction): SelectImage => {
  switch (action.type) {
    case SELECT_IMAGE:
      return ({
        ...state,
        id: action.payload,
      })
    default:
      return state;
  }
}

export default selectImage;
