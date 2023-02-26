import {
  FETCH_AUTHOR_REQUEST,
  FETCH_AUTHOR_SUCCESS,
  FETCH_AUTHOR_FAILURE,
} from './actionTypes';

export interface IAuthor {
  _id: number;
  email: string;
  fname: string;
  lname: string;
}

export interface AuthorState {
  pending: boolean;
  authors: IAuthor[];
  error: string | null;
}

export interface FetchAuthorSuccessPayload {
  authors: IAuthor[];
}

export interface FetchAuthorFailurePayload {
  error: string;
}

export interface FetchAuthorRequest {
  type: typeof FETCH_AUTHOR_REQUEST;
}

export type FetchAuthorSuccess = {
  type: typeof FETCH_AUTHOR_SUCCESS;
  payload: FetchAuthorSuccessPayload;
};

export type FetchAuthorFailure = {
  type: typeof FETCH_AUTHOR_FAILURE;
  payload: FetchAuthorFailurePayload;
};

export type AuthorActions =
  | FetchAuthorRequest
  | FetchAuthorSuccess
  | FetchAuthorFailure;
