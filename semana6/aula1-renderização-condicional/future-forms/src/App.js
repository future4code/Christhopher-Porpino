import React from 'react';
import './App.css';
import styled from 'styled-components';
import Etapa1 from './components/Etapa1';
import Etapa2 from './components/Etapa2';
import Etapa3 from './components/Etapa3';

const MainContainer = styled.div``

const Button = styled.button`
  margin: 20px;
`

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mostrarNaTela: 'etapa1',
    };
  }

  onClickProximaEtapa = () => {
    this.setState({
      mostrarNaTela: 'etapa2',
    });
  }



  render() {

    let mostrarNaTela
    switch (this.state.mostrarNaTela) {
      case "etapa1":
        mostrarNaTela = (<Etapa1 />);
        break;
      case "etapa2":
        mostrarNaTela = (<Etapa2 />);
        break;
      case "etapa3":
        mostrarNaTela = (<Etapa3 />);
        break;
      default:
        mostrarNaTela = <div>Erro!</div>
        break;
    }

    // if (this.state.mostrarNaTela === 'etapa1') {
    //   mostrarNaTela = <Etapa1 />
    // } else if (this.state.mostrarNaTela === 'etapa2') {
    //   mostrarNaTela = <Etapa2 />
    // } else if (this.state.mostrarNaTela === 'etapa3') {
    //   mostrarNaTela = <Etapa3 />
    // }


    return (
      <MainContainer>

        {mostrarNaTela}

        <Button onClick={this.onClickProximaEtapa}> Próxima etapa</Button >

      </MainContainer >
    );
  }
}

export default App;
