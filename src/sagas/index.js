import { fork, take, call, put, delay } from "redux-saga/effects";
import * as taskTypes from "./../constants/task";
import { getList } from "./../apis/task";
import { STATUS_CODE } from "./../constants/";
import { fetchListTaskSuccess, fetchListTaskFail } from "../actions/task";
import { showLoading, hideLoading } from "../actions/ui";

function* watchFetchListTaskAction() {
  while (true) {  
    yield take(taskTypes.FETCH_TASK);
    yield put(showLoading());
    const resp = yield call(getList);
    const { status, data } = resp;
    if (status === STATUS_CODE.SUCCESS) {
      yield put(fetchListTaskSuccess(data));
    } else {
      yield put(fetchListTaskFail(data));
    }
    yield delay(1000);
    yield put(hideLoading());
  }
}



function* rootSaga() {
  yield fork(watchFetchListTaskAction);
}

export default rootSaga;
