import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ItemDaListaDeUsuarios from '../ItemDaListaDeUsuarios';

const baseUrl = "https://us-central1-future4-users.cloudfunctions.net/api";

class ListaDeUsuarios extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allUsers: [],
            name: '',
            email: '',
        };
    }

    componentDidMount() {
        const axiosConfig = {
            headers: {
                "api-token": "christhopher",
            }
        }

        const requestPegarTodosOsUsuarios = axios.get(`${baseUrl}/users/getAllUsers`, axiosConfig)

        requestPegarTodosOsUsuarios.then((response) => {
            this.setState({ allUsers: response.data.result })
        })
    }

    render() {

        const listaDeUsuariosCadastrados = this.state.allUsers.map(user => {
            return <li> {user.name} </li>
        });

        return (
            <div>
                <h2>Lista de Usuarios Cadastrados</h2>
                {this.state.allUsers.map((user) => (
                    <li>{ user.name }</li>
                ))}

                <div>
                    <ul>
                        {/* {listaDeUsuariosCadastrados} */}
                    </ul>
                </div>
                <ItemDaListaDeUsuarios />
            </div>
        );

    }
}

export default ListaDeUsuarios;