import { put, call, takeEvery } from "redux-saga/effects";
import axios, { AxiosResponse } from "axios";
import {
  GET_USERS_START,
  getUsersSuccess,
  getUsersError,
} from "modules/users/actions";

// saga 생성
function* getUsers() {
  const users: AxiosResponse = yield call(() =>
    axios.get(`http://jsonplaceholder.typicode.com/users`)
  );

  try {
    yield put(getUsersSuccess(users.data));
  } catch (e: any) {
    yield put(getUsersError(e));
  }
}

export function* getUsersSaga() {
  yield takeEvery(GET_USERS_START, getUsers);
}
