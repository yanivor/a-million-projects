import {
  FETCH_AUTHOR_REQUEST,
  FETCH_AUTHOR_FAILURE,
  FETCH_AUTHOR_SUCCESS,
} from './actionTypes';
import {
  FetchAuthorRequest,
  FetchAuthorSuccess,
  FetchAuthorSuccessPayload,
  FetchAuthorFailure,
  FetchAuthorFailurePayload,
} from './types';

export const fetchAuthorRequest = (): FetchAuthorRequest => ({
  type: FETCH_AUTHOR_REQUEST,
});

export const fetchAuthorSuccess = (
  payload: FetchAuthorSuccessPayload
): FetchAuthorSuccess => ({
  type: FETCH_AUTHOR_SUCCESS,
  payload,
});

export const fetchAuthorFailure = (
  payload: FetchAuthorFailurePayload
): FetchAuthorFailure => ({
  type: FETCH_AUTHOR_FAILURE,
  payload,
});
