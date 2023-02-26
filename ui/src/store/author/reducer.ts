import {
  FETCH_AUTHOR_REQUEST,
  FETCH_AUTHOR_SUCCESS,
  FETCH_AUTHOR_FAILURE,
} from './actionTypes';
  
import { AuthorActions, AuthorState } from './types';
  
const initialState: AuthorState = {
  pending: false,
  authors: [],
  error: null,
};
  
const reducer = (state = initialState, action: AuthorActions) => {
  switch (action.type) {
    case FETCH_AUTHOR_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_AUTHOR_SUCCESS:
      return {
        ...state,
        pending: false,
        authors: action.payload.authors,
        error: null,
      };
    case FETCH_AUTHOR_FAILURE:
      return {
        ...state,
        pending: false,
        authors: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
