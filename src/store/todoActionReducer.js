import {DELETE_TODO, TOGGLE_TODO, ADD_TODO, PUT_TODO} from "./types";

const initialState = []

export const todoActionReducer = (state = initialState, action) => {
    switch (action.type) {
        // case REQUEST_TODO:
        //     return state = [...action.payload]
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
        case PUT_TODO:
            return state.concat([...action.payload])
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