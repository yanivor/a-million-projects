import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { fetchAuthorFailure, fetchAuthorSuccess } from './actions';
import { FETCH_AUTHOR_REQUEST } from './actionTypes';
import { IAuthor } from './types';

const getAuthors = () =>
  axios.get<IAuthor[]>('http://127.0.0.1:8000/api/author');

function* fetchAuthorSaga(): any {
  try {
    const response = yield call(getAuthors);
    yield put(
      fetchAuthorSuccess({
        authors: response.data,
      })
    );
  } catch (e) {
    if (e instanceof Error) {
      yield put(
        fetchAuthorFailure({
          error: e.message,
        })
      );
    }
  }
}

function* authorSaga() {
  yield all([takeLatest(FETCH_AUTHOR_REQUEST, fetchAuthorSaga)]);
}

export default authorSaga;
