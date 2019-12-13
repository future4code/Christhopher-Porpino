import React from 'react';
// import 'EscreverComentario.css';

class EscreverComentario extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicouEmComentar: false,
        }
    }

    aoClicarEmComentar = () => {
        if (this.state.clicouEmComentar) {
            this.setState(
                {
                    clicouEmComentar: false,
                }
            )
        } else {
            this.setState(
                {
                    clicouEmComentar: true,
                }
            )
        }
    }

    retornaInputDeComentario = () => {
        if (this.state.clicouEmComentar) {
            return (<h1> Teste If </h1>)
        } else {
            return (<h1> Teste Else </h1>)
        }

    }

    render() {
        return (
            <div>
                {
                    this.retornaInputDeComentario
                }
    
                <input
                    value={""}
                    onChange={""}
                />
                <button onClick={""}> Enviar </button>
            </div>
        )
    }

}

export default EscreverComentario;