import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { fetchPostFailure, fetchPostSuccess } from './actions';
import { FETCH_POST_REQUEST } from './actionTypes';
import { IPost } from './types';

const getPosts = () =>
  axios.get<IPost[]>('http://127.0.0.1:8000/api/post');

function* fetchPostSaga(): any {
  try {
    const response = yield call(getPosts);
    yield put(
      fetchPostSuccess({
        posts: response.data,
      })
    );
  } catch (e) {
    if (e instanceof Error) {
      yield put(
        fetchPostFailure({
          error: e.message,
        })
      );
    }
  }
}

function* postSaga() {
  yield all([takeLatest(FETCH_POST_REQUEST, fetchPostSaga)]);
}

export default postSaga;
