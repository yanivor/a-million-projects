import {
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE,
} from './actionTypes';

export interface IPost {
  _id: string;
  title: string;
  content: string;
}

export interface PostState {
  pending: boolean;
  posts: IPost[];
  error: string | null;
}

export interface FetchPostSuccessPayload {
  posts: IPost[];
}

export interface FetchPostFailurePayload {
  error: string;
}

export interface FetchPostRequest {
  type: typeof FETCH_POST_REQUEST;
}

export type FetchPostSuccess = {
  type: typeof FETCH_POST_SUCCESS;
  payload: FetchPostSuccessPayload;
};

export type FetchPostFailure = {
  type: typeof FETCH_POST_FAILURE;
  payload: FetchPostFailurePayload;
};

export type PostActions =
  | FetchPostRequest
  | FetchPostSuccess
  | FetchPostFailure;
