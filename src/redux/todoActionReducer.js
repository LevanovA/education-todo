import {DELETE_TODO} from "./types";

const initialState = [
    {id: 1, completed: false, title: 'Купить хлеб'},
    {id: 2, completed: false, title: 'Купить масло'},
    {id: 3, completed: false, title: 'Купить молоко'},
]

export const todoActionReducer = (state = initialState, action) => {
    switch (action.type) {
        case DELETE_TODO:
            const newState = state.filter(todo => todo.id !== id)
            return state
        case 'REMOVE_TODO':
            return state
        default:
            return state
    }

}