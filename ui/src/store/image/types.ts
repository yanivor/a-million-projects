import {
  FETCH_IMAGE_REQUEST,
  FETCH_IMAGE_SUCCESS,
  FETCH_IMAGE_FAILURE,
} from './actionTypes';

export interface IImage {
  _id: number;
  url: string;
  name: string;
  label: string;
}

export interface ImageState {
  pending: boolean;
  images: IImage[];
  error: string | null;
}

export interface FetchImageSuccessPayload {
  images: IImage[];
}

export interface FetchImageFailurePayload {
  error: string;
}

export interface FetchImageRequest {
  type: typeof FETCH_IMAGE_REQUEST;
}

export type FetchImageSuccess = {
  type: typeof FETCH_IMAGE_SUCCESS;
  payload: FetchImageSuccessPayload;
};

export type FetchImageFailure = {
  type: typeof FETCH_IMAGE_FAILURE;
  payload: FetchImageFailurePayload;
};

export type ImageActions =
  | FetchImageRequest
  | FetchImageSuccess
  | FetchImageFailure;
