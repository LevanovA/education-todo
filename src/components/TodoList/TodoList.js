import React from 'react';
import styled from "styled-components";
import TodoItem from "../TodoItem";
import {connect} from "react-redux";
import {TOGGLE_TODO, DELETE_TODO} from "../../store/types";

const StyledTodoList= styled.ul`
list-style: none;
padding: 0;
margin: 0;
`

const TodoList = ({dispatch, todos}) => {
    return (
        <StyledTodoList>
            {todos.map((todo, index) => {
                return (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        index={index}
                        onChange={() => dispatch({
                            type: TOGGLE_TODO,
                            payload: todo.id
                        })}
                        deleteItem={() => dispatch({
                            type: DELETE_TODO,
                            payload: todo.id
                        })}
                    />
                )
            })}
        </StyledTodoList>
    )
};

const mapStateToProps = state => {
    return {
        todos: state.todoAction
    }
}

export default connect(mapStateToProps, null)(TodoList);