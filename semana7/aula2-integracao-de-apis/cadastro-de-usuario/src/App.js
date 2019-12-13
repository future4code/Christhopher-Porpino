import React from 'react';
import ListaDeUsuarios from './components/ListaDeUsuarios';
import CadastroDeUsuario from './components/CadastroDeUsuario';
import ItemDaListaDeUsuarios from './components/ItemDaListaDeUsuarios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      paginaAtual: "cadastro"
    }
  }

  aoMudarDePagina = () => {
    if (this.state.paginaAtual === 'cadastro') {
      this.setState({ paginaAtual: "lista" })
    } else {
      this.setState({ paginaAtual: 'cadastro' })
    }
  }

  render() {

    const buttonText = this.state.paginaAtual === "cadastro" ? "Ir para Lista" : "Ir para Cadastro"

    return (
      <div>
        <button onClick={this.aoMudarDePagina}>
          { buttonText }
        </button>
        {this.state.paginaAtual === 'cadastro' ?
          <CadastroDeUsuario />
          :
          <ListaDeUsuarios />
        }

        {/* <ListaDeUsuarios />
        <ItemDaListaDeUsuarios /> */}
      </div>
    );
  }
}

export default App;
