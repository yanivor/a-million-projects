import { combineReducers } from "redux";

import postReducer from "./post/reducer";
import authorReducer from "./author/reducer";
import imageReducer from "./image/reducer";

const rootReducer = combineReducers({
  post: postReducer,
  author: authorReducer,
  image: imageReducer,
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;
