// import {useEffect, useState} from "react";
import {takeEvery, call, put} from 'redux-saga/effects';
import {PUT_TODO, REQUEST_TODO} from "./types";
// import {useFetch} from "use-http";

export function* sagasWatcher() {
    yield takeEvery(REQUEST_TODO, sagaRequestTodo);
}

function* sagaRequestTodo() {
    const payload = yield call(requestTodo)
    yield put({type: PUT_TODO, payload: payload})
}

async function requestTodo() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    return await res.json();
}

// const requestTodo = () => {
//
//     const { get, response } = useFetch('https://jsonplaceholder.typicode.com');
//
//     const [todos, setTodos] = useState([])
//
//     useEffect(() => {
//         loadInitialTodos();
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, []);
//
//     async function loadInitialTodos() {
//         try {
//             const result = await get("/todos");
//             if (response.ok) setTodos(result);
//         } catch (e) {
//             console.log(111, 'error request todos')
//         }
//     }
//
//     return todos
// }