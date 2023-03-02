import {
  FETCH_CATEGORY_REQUEST,
  FETCH_CATEGORY_FAILURE,
  FETCH_CATEGORY_SUCCESS,
} from './actionTypes';
import {
  FetchCategoryRequest,
  FetchCategorySuccess,
  FetchCategorySuccessPayload,
  FetchCategoryFailure,
  FetchCategoryFailurePayload,
} from './types';

export const fetchCategoryRequest = (): FetchCategoryRequest => ({
  type: FETCH_CATEGORY_REQUEST,
});

export const fetchCategorySuccess = (
  payload: FetchCategorySuccessPayload
): FetchCategorySuccess => ({
  type: FETCH_CATEGORY_SUCCESS,
  payload,
});

export const fetchCategoryFailure = (
  payload: FetchCategoryFailurePayload
): FetchCategoryFailure => ({
  type: FETCH_CATEGORY_FAILURE,
  payload,
});
