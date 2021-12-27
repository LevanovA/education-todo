import React from "react";
import Wrapper from "./components/Wrapper/index";
import Title from "./components/Title";
import AddTodo from "./components/AddTodo";
import TodoListContainer from "./containers/TodoListContainer";

function App() {

  return (
      <div className="App">
          <Wrapper>
              <Title>Текущие задачи</Title>
              <AddTodo/>
              <TodoListContainer/>
          </Wrapper>
      </div>
  );
}

export default App;
