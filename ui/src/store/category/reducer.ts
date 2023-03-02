import {
  FETCH_CATEGORY_REQUEST,
  FETCH_CATEGORY_SUCCESS,
  FETCH_CATEGORY_FAILURE,
} from './actionTypes';
  
import { CategoryActions, CategoryState } from './types';
  
const initialState: CategoryState = {
  pending: false,
  categories: [],
  error: null,
};
  
const reducer = (state = initialState, action: CategoryActions) => {
  switch (action.type) {
    case FETCH_CATEGORY_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_CATEGORY_SUCCESS:
      return {
        ...state,
        pending: false,
        categories: action.payload.categories,
        error: null,
      };
    case FETCH_CATEGORY_FAILURE:
      return {
        ...state,
        pending: false,
        categories: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
