import React from "react";
import Wrapper from "./components/Wrapper/index";
import Title from "./components/Title";
import AddTodoContainer from "./containers/AddTodoContainer";
import TodoListContainer from "./containers/TodoListContainer";

function App() {

  return (
      <div className="App">
          <Wrapper>
              <Title>Текущие задачи</Title>
              <AddTodoContainer/>
              <TodoListContainer/>
          </Wrapper>
      </div>
  );
}

export default App;
