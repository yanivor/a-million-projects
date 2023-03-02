import { all, fork } from "redux-saga/effects";

import postSaga from "./post/sagas";
import authorSaga from "./author/sagas";
import imageSaga from "./image/sagas";
import categorySaga from "./category/sagas";

export function* rootSaga() {
  yield all([
    fork(postSaga),
    fork(authorSaga),
    fork(imageSaga),
    fork(categorySaga),
  ]);
}
