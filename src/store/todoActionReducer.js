// import React, { useState, useEffect } from "react";
// import useFetch from "use-http";
import {DELETE_TODO, TOGGLE_TODO, ADD_TODO} from "./types";

const initialState = [
    {id: 1, completed: false, title: 'Купить хлеб'},
    {id: 2, completed: false, title: 'Купить масло'},
    {id: 3, completed: false, title: 'Купить молоко'},
]

// const initialState = () => {
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

export const todoActionReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_TODO:
            return state.map(item => {
                if (item.id === action.payload) {
                    return {
                        ...item, completed: !item.completed
                    }
                }
                return item
            })
        case DELETE_TODO:
            return state.filter(todo => todo.id !== action.payload)
        case ADD_TODO:
            return state.concat([{
                id: state.length + 1,
                completed: false,
                title: action.payload
            }])
        default:
            return state
    }

}