import {
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE,
} from './actionTypes';
  
import { PostActions, PostState } from './types';
  
const initialState: PostState = {
  pending: false,
  posts: [],
  error: null,
};
  
const reducer = (state = initialState, action: PostActions) => {
  switch (action.type) {
    case FETCH_POST_REQUEST:
      return {
        ...state,
        pending: true,
      };
    case FETCH_POST_SUCCESS:
      return {
        ...state,
        pending: false,
        posts: action.payload.posts,
        error: null,
      };
    case FETCH_POST_FAILURE:
      return {
        ...state,
        pending: false,
        posts: [],
        error: action.payload.error,
      };
    default:
      return {
        ...state,
      };
  }
};

export default reducer;
