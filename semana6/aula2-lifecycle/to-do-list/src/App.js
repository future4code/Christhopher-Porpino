import React from 'react';
import './App.css';
import styled from 'styled-components';

const MainContainer = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;

`


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      listaDeTarefas: [
        "item1",
        "item2",
        "item3",
      ]
    };
  }

  aoClicarEmAdicionar = () => {
    const novaTarefa = document.getElementById("input-de-tarefa").value
    const copiaListaDeTarefas = [...this.state.listaDeTarefas]
    copiaListaDeTarefas.push(novaTarefa);

    this.setState({ listaDeTarefas: copiaListaDeTarefas })

  };

  render() {
    const listaParaExibir = this.state.listaDeTarefas.map((tarefa) => {
      return <li> {tarefa} </li>
    })

    return (
      <MainContainer>
        <h1>Lista de tarefas</h1>
        <div>
          <input id="input-de-tarefa" />
          <button onClick={this.aoClicarEmAdicionar}>Adicionar</button>
        </div>

        <div>
          <label>Filtro</label>
          <select>
            <option value="todas">Todas</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </div>

        <hr />

        <div>
          <ul>
            {listaParaExibir}
          </ul>
        </div>

      </MainContainer>
    );
  }
}

export default App;
