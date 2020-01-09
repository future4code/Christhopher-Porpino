import React from 'react';
import styled from 'styled-components';


const MainContainer = styled.div`
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

export default class AppContainer extends React.Component {
	constructor(props) {
		super(props)
	}

	render() {
		return (
		<div>
			<MainContainer>
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
			</MainContainer>
		</div>
		)
	}
}

