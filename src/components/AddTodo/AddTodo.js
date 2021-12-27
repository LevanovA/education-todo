import React, { useState } from 'react';
import styled from "styled-components";
import {connect} from "react-redux";
import {ADD_TODO} from "../../store/types";

const StyledAddTodo= styled.div`
margin-bottom: 40px;

.form {
    display: flex;
}

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

const AddTodo = ({ dispatch }) => {
    const [value, setValue] = useState('');

    return (
        <StyledAddTodo>
            <form className="form" action="#">
                <input type="text" value={value} onChange={(evt => setValue(evt.target.value))}/>
                <button
                    type="button"
                    onClick={() => dispatch({
                        type: ADD_TODO,
                        payload: value,
                    })}
                >
                    Добавить задачу
                </button>
            </form>
        </StyledAddTodo>
    )
};

const mapStateToProps = state => {
    return {
        todos: state.todoAction,
    }
};

export default connect(mapStateToProps, null)(AddTodo);