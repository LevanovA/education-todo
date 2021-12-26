import React from "react";
import Wrapper from "./components/Wrapper/index";
import Title from "./components/Title";
import TodoList from "./components/TodoList";
import AddTodo from "./components/AddTodo";

function App() {
    
    function addTodo(title) {

    }

  return (
      <div className="App">
          <Wrapper>
              <Title>Текущие задачи</Title>
              <AddTodo onCreat={addTodo}/>
              <TodoList/>
          </Wrapper>
      </div>
  );
}

export default App;
