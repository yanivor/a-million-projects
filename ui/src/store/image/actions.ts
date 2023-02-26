import {
  FETCH_IMAGE_REQUEST,
  FETCH_IMAGE_FAILURE,
  FETCH_IMAGE_SUCCESS,
} from './actionTypes';
import {
  FetchImageRequest,
  FetchImageSuccess,
  FetchImageSuccessPayload,
  FetchImageFailure,
  FetchImageFailurePayload,
} from './types';

export const fetchImageRequest = (): FetchImageRequest => ({
  type: FETCH_IMAGE_REQUEST,
});

export const fetchImageSuccess = (
  payload: FetchImageSuccessPayload
): FetchImageSuccess => ({
  type: FETCH_IMAGE_SUCCESS,
  payload,
});

export const fetchImageFailure = (
  payload: FetchImageFailurePayload
): FetchImageFailure => ({
  type: FETCH_IMAGE_FAILURE,
  payload,
});
