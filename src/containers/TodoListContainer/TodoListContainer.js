import React from "react";
import TodoList from "../../components/TodoList";
import {DELETE_TODO, TOGGLE_TODO} from "../../store/types";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        todos: state.todoAction,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onChange: (id) => dispatch({
            type: TOGGLE_TODO,
            payload: id,
        }),
        onDelete: (id) => dispatch({
            type: DELETE_TODO,
            payload: id,
        }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)