import React from 'react';
import styled from "styled-components";
import TodoItem from "../TodoItem";
import {connect} from "react-redux";

const StyledTodoList= styled.ul`
list-style: none;
padding: 0;
margin: 0;
`

const TodoList = (props) => {
    console.log(222, props)
    return (
        <StyledTodoList {...props}>
            {props.todoAction.map((todo, index) => {
                return (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        index={index}
                        onChange={props.onToggle}
                        deleteItem={props.deleteTask}
                    />
                )
            })}
        </StyledTodoList>
    )
};

const mapStateToProps = state => {
    return state
}

export default connect(mapStateToProps, null)(TodoList);