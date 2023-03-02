import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { fetchCategoryFailure, fetchCategorySuccess } from './actions';
import { FETCH_CATEGORY_REQUEST } from './actionTypes';
import { ICategory } from './types';

const getCategories = () =>
  axios.get<ICategory[]>('http://127.0.0.1:8000/api/category');

function* fetchCategorySaga(): any {
  try {
    const response = yield call(getCategories);
    yield put(
      fetchCategorySuccess({
        categories: response.data,
      })
    );
  } catch (e) {
    console.log(e);
    if (e instanceof Error) {
      yield put(
        fetchCategoryFailure({
          error: e.message,
        })
      );
    }
  }
}

function* categorySaga() {
  yield all([takeLatest(FETCH_CATEGORY_REQUEST, fetchCategorySaga)]);
}

export default categorySaga;
