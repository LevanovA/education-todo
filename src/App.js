import React, {useState} from "react";
import Wrapper from "./components/Wrapper/index";
import Title from "./components/Title";
import TodoList from "./components/TodoList";

function App() {
    const [todos, setTodos] = useState([
        {id: 1, completed: false, title: 'Купить хлеб'},
        {id: 2, completed: false, title: 'Купить масло'},
        {id: 3, completed: false, title: 'Купить молоко'},
    ])

    function toggleTodo (id) {
        setTodos(
            todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }

                return todo
            })
        )
    }
    
    function removeTodo (id) {
        setTodos(todos.filter(todo => todo.id !== id))
    }

  return (
      <div className="App">
          <Wrapper>
              <Title>Текущие задачи</Title>
              <TodoList onToggle={toggleTodo} deleteTask={removeTodo}/>
          </Wrapper>
      </div>
  );
}

export default App;
