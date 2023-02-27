import {
  FETCH_POST_REQUEST,
  FETCH_POST_FAILURE,
  FETCH_POST_SUCCESS,
  SAVE_POST_REQUEST,
} from './actionTypes';
import {
  FetchPostRequest,
  FetchPostSuccess,
  FetchPostSuccessPayload,
  FetchPostFailure,
  FetchPostFailurePayload,
  SavePostRequest,
} from './types';

export const fetchPostRequest = (): FetchPostRequest => ({
  type: FETCH_POST_REQUEST,
});

export const fetchPostSuccess = (
  payload: FetchPostSuccessPayload
): FetchPostSuccess => ({
  type: FETCH_POST_SUCCESS,
  payload,
});

export const fetchPostFailure = (
  payload: FetchPostFailurePayload
): FetchPostFailure => ({
  type: FETCH_POST_FAILURE,
  payload,
});

export const savePostRequest = ({
  _id,
  description,
  content
}:{
  _id: string,
  description: string,
  content: string,
}): SavePostRequest => ({
  type: SAVE_POST_REQUEST,
  payload: {
    _id,
    description,
    content,
  }
});
