import {
  FETCH_CATEGORY_REQUEST,
  FETCH_CATEGORY_SUCCESS,
  FETCH_CATEGORY_FAILURE,
} from './actionTypes';

export interface ICategory {
  _id: string;
  name: string;
  title: string;
}

export interface CategoryState {
  pending: boolean;
  categories: ICategory[];
  error: string | null;
}

export interface FetchCategorySuccessPayload {
  categories: ICategory[];
}

export interface FetchCategoryFailurePayload {
  error: string;
}

export interface FetchCategoryRequest {
  type: typeof FETCH_CATEGORY_REQUEST;
}

export type FetchCategorySuccess = {
  type: typeof FETCH_CATEGORY_SUCCESS;
  payload: FetchCategorySuccessPayload;
};

export type FetchCategoryFailure = {
  type: typeof FETCH_CATEGORY_FAILURE;
  payload: FetchCategoryFailurePayload;
};

export type CategoryActions =
  | FetchCategoryRequest
  | FetchCategorySuccess
  | FetchCategoryFailure;
