import React, { useState } from 'react';
import styled from "styled-components";

const StyledAddTodo= styled.div`
display: flex;
margin-bottom: 40px;

input {
    padding: 10px;
    font-size: 16px;
    line-height: 18px;
    color: #303030;
    border: 1px
    solid #e5e5e5;
    border-radius: 2px;
    outline: none;
}

button {
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 400;
    font-size: 18px;
    line-height: 25px;
    color: #ffffff;
    text-decoration: none;
    text-align: center;
    background-color: green;
    box-sizing: border-box;
    cursor: pointer;
    outline: none;
    box-shadow: none;
    border: none;
    transition: 0.5s;
    webkit-appearance: none;
    
    &:hover {
        opacity: 0.7;
    }
}
`

const AddTodo = ({ addTodo }) => {
    const [value, setValue] = useState('');

    return (
        <StyledAddTodo>
            <input type="text" value={value} onChange={(evt => setValue(evt.target.value))}/>
            <button
                type="button"
                onClick={() => addTodo(value)}
            >
                Добавить задачу
            </button>
        </StyledAddTodo>
    )
};

export default AddTodo;