import {takeEvery} from 'redux-saga/effects';
import {REQUEST_TODO} from "./types";

export function* sagasWatcher() {
    yield takeEvery(REQUEST_TODO, sagaRequestTodo);
}

function* sagaRequestTodo() {

}