import {DELETE_TODO, TOGGLE_TODO} from "./types";

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
        case 'REMOVE_TODO':
            return state
        default:
            return state
    }

}