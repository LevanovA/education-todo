import React from 'react';
import styled from "styled-components";
import TodoItem from "../TodoItem";

const StyledTodoList= styled.ul`
list-style: none;
padding: 0;
margin: 0;
`

const TodoList = ({ todos, onChange, onDelete }) => {
    return (
        <StyledTodoList>
            {todos.map((todo, index) => {
                return (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        index={index}
                        onChange={() => onChange(todo.id)}
                        deleteItem={() => onDelete(todo.id)}
                    />
                )
            })}
        </StyledTodoList>
    )
};

export default TodoList;