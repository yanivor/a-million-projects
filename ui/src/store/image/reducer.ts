import {
  FETCH_IMAGE_REQUEST,
  FETCH_IMAGE_SUCCESS,
  FETCH_IMAGE_FAILURE,
} from './actionTypes';
  
import { ImageActions, ImageState } from './types';
  
const initialState: ImageState = {
  pending: false,
  images: [],
  error: null,
};
  
const reducer = (state = initialState, action: ImageActions) => {
  switch (action.type) {
    case FETCH_IMAGE_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_IMAGE_SUCCESS:
      return {
        ...state,
        pending: false,
        images: action.payload.images,
        error: null,
      };
    case FETCH_IMAGE_FAILURE:
      return {
        ...state,
        pending: false,
        images: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
