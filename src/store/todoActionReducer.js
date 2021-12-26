import {DELETE_TODO, TOGGLE_TODO, ADD_TODO} from "./types";

const initialState = [
    {id: 1, completed: false, title: 'Купить хлеб'},
    {id: 2, completed: false, title: 'Купить масло'},
    {id: 3, completed: false, title: 'Купить молоко'},
]

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