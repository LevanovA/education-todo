import React from 'react';
import styled from "styled-components";
import {connect} from "react-redux";

const StyledTodoItem= styled.li`
color: red;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0.5rem 1rem;
border: 1px solid #ccc;
border-radius: 4px;
margin-bottom: 0.5rem;

input {
    margin-right: 1rem;
}

.number {
    color: green;
    margin-right: 0.1rem;
}

button {
    border: none;
    background-color: transparent;
    outline: none;
    cursor: pointer;
}

.close {
    fill: green;
    
    &:hover {
        fill: red;
    }
}

.done {
    text-decoration: line-through;
}
`

const TodoItem = (props) => {
    const classes = [];

    if (props.todo.completed) {
        classes.push('done')
    }
    return (
        <StyledTodoItem {...props}>
            <span className={classes.join(' ')}>
                <input
                    className={'input'}
                    type="checkbox"
                    onChange={() => props.onChange(props.todo.id)}
                />
                <strong className={'number'}>{props.index + 1}</strong>
                {props.todo.title}
            </span>
            <button onClick={() => props.deleteItem(props.todo.id)}>
                <svg className={'close'} width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12.864 0.86397L12.1569 0.156863L7 5.31372L1.84314 0.156861L1.13603 0.863968L6.29289 6.02083L0.843154 11.4706L1.55026 12.1777L7 6.72794L12.4497 12.1777L13.1568 11.4706L7.70711 6.02083L12.864 0.86397Z"/>
                </svg>
            </button>
        </StyledTodoItem>
    )
};

// const mapStateToProps = state => {
//     console.log(state)
//     return state
// }

export default TodoItem;