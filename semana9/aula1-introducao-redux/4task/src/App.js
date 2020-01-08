import React from 'react';
import styled from 'styled-components';
import { createStore } from 'redux';
import rootReducer from './reducers';

const Root = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
  justify-content: center;
  align-items: center;
`

const InputNewTask = styled.input`
  width: 80%;
`

const TaskList = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

const TaskName = styled.p`
  width: 60%;
`

const ButtonDeleteTask = styled.p`
`

const Footer = styled.footer`
`

const store = createStore(rootReducer);

const initialState = {
  newTask: "",
  tasks: [
    {
      id: 0,
      name: "",
    }
  ]
};

function App() {
  return (
    <Provider store={store}>
      <Root>
        <h1>4Task</h1>
        <label>Insira nova tarefa:</label>
        <InputNewTask></InputNewTask>
        <TaskList>
          <input type="checkbox"></input>
          <TaskName>Usar Redux</TaskName>
          <ButtonDeleteTask>X</ButtonDeleteTask>
        </TaskList>
        <Footer>
          <button>Marcar todas as tarefas</button>
          <button value="allTasks">Todas</button>
          <button value="doneTasks">Concluídas</button>
          <button value="pending">Pendentes</button>
        </Footer>
      </Root>
    </Provider>
  );
}

export default App;
