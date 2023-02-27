import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { fetchPostFailure, fetchPostSuccess } from './actions';
import { FETCH_POST_REQUEST, SAVE_POST_REQUEST } from './actionTypes';
import { IPost } from './types';

const getPosts = () =>
  axios.get<IPost[]>('http://127.0.0.1:8000/api/post');

const setPost = ({
  _id,
  content
}:{
  _id: string,
  content: string
}) =>
  axios.put<IPost>(`http://127.0.0.1:8000/api/post/${_id}`, { content });

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

function* savePostSaga(): any {
  try {
    const response = yield call(setPost, { _id: '63fc379b850da0ca08b8a440', content: 'update123' });

    /*
    yield put(
      fetchPostSuccess({
        posts: response.data,
      })
    );
    */
  } catch (e) {
    if (e instanceof Error) {
      console.log(e);
      /*
      yield put(
        fetchPostFailure({
          error: e.message,
        })
      );
      */
    }
  }
}

function* postSaga() {
  yield all([
    takeLatest(FETCH_POST_REQUEST, fetchPostSaga),
    takeLatest(SAVE_POST_REQUEST, savePostSaga),
  ]);
}

export default postSaga;
