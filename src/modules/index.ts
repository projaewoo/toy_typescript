import { combineReducers } from "redux";

import { all } from "redux-saga/effects";

import counter, { counterSaga } from "./counter";
import todos from "./todos";
import member from "./member";

const rootReducer = combineReducers({
  counter,
  todos,
  member,
});

export function* rootSaga() {
  // all 함수: 여러 사가를 합쳐주는 역할
  yield all([counterSaga()]);
}

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
