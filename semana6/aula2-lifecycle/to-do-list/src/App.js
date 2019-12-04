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

  onClickBotaoAdicionar = () => {
    const copiaListaDeTarefas = [...this.state.listaDeTarefas]
    copiaListaDeTarefas.push("Novo item")

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
          <input />
          <button onClick={this.onClickBotaoAdicionar}>Adicionar</button>
        </div>

        <div>
          <label>Filtro</label>
          <select>
            <option value="">Todas</option>
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
