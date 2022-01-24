import AddTodo from "../../components/AddTodo";
import {ADD_TODO, REQUEST_TODO} from "../../store/types";
import {connect} from "react-redux";

const mapStateToProps = (state) => {
    return {
        todos: state.todoAction,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addTodo: (value) => dispatch({
            type: ADD_TODO,
            payload: value
        }),
        requestTodo: () => dispatch({
            type: REQUEST_TODO,
        }),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo)