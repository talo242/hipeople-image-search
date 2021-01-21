import Image from "../../interfaces/Image/Image.interface";
import { SELECT_IMAGE } from "../actionTypes";

interface SelectImage {
  image: Image | null;
}

interface SelectImageAction {
  type: typeof SELECT_IMAGE;
  payload: Image | null;
}

const initialState: SelectImage = {
  image: null
}

const selectImage = (state = initialState, action: SelectImageAction): SelectImage => {
  switch (action.type) {
    case SELECT_IMAGE:
      return ({
        ...state,
        image: action.payload
      })
    default:
      return state;
  }
}

export default selectImage;
