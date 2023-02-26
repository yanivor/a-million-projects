import axios from 'axios';
import { all, call, put, takeLatest } from 'redux-saga/effects';

import { fetchImageFailure, fetchImageSuccess } from './actions';
import { FETCH_IMAGE_REQUEST } from './actionTypes';
import { IImage } from './types';

const getImages = () =>
  axios.get<IImage[]>('http://127.0.0.1:8000/api/image');

function* fetchImageSaga(): any {
  try {
    const response = yield call(getImages);
    yield put(
      fetchImageSuccess({
        images: response.data,
      })
    );
  } catch (e) {
    if (e instanceof Error) {
      yield put(
        fetchImageFailure({
          error: e.message,
        })
      );
    }
  }
}

function* imageSaga() {
  yield all([takeLatest(FETCH_IMAGE_REQUEST, fetchImageSaga)]);
}

export default imageSaga;
