import React from 'react';
import styled from 'styled-components';
import axios from 'axios';


const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 10px;
    
`

const baseUrl = "https://us-central1-future4-users.cloudfunctions.net/api";

class TelaDeCadastro extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allUsers: [],
            name: '',
            email: '',
        };
    }

    getAllUsers = () => {
        const url = `${baseUrl}/users/getAllUsers`
        const token = "christhopher"

        const request = axios.get(url, {
            headers: {
                'api-token': token,
            }
        })

        request.then((response) => {
            console.log(response.data.result);

            const allUsers = response.data.result;
            this.setState({ allUsers: allUsers })
        }).catch((error) => {
            console.log(error.message)
        })
    }

    createUser = () => {
        const url = `${baseUrl}/users/createUser`
        const token = "christhopher"

        const data = {
            "name": this.state.name,
            "email": this.state.email
        }

        const request = axios.post(url, data, {
            headers: {
                'api-token': token
            }
        });

        request.then((response) => {
            console.log(response.data.result);
            this.getAllUsers();
            alert("Usuário cadatrado com sucesso");
        }).catch((error) => {
            alert(error.message);
        })
    }

    componentDidMount() {
        this.getAllUsers();
    }

    onNewUserNameChange = (event) => {
        this.setState({ name: event.target.value })
    }

    onNewUserMailChange = (event) => {
        this.setState({ email: event.target.value })
    }

    render() {

        const listaDeUsuariosCadastrados = this.state.allUsers.map(users => {
            return <li> {users.name} </li>
        });            

        return (
            <div>
                <h1>Cadastro</h1>
                <Form>
                    <label>Nome: </label>
                    <input type="text" onChange={this.onNewUserNameChange}
                        value={this.state.name}
                    />
                    <label>Email: </label>
                    <input type="email" onChange={this.onNewUserMailChange}
                        value={this.state.email}
                    />
                </Form>
                <button onClick={() => this.createUser()}>
                    Cadastrar
                </button>
                <hr />
                <div>
                    <ul>
                        {listaDeUsuariosCadastrados}
                        {/* {this.state.allUsers}.map(users => (<li> {users.name} </li>)) */}
                    </ul>
                </div>
            </div>
        );

    }
}

export default TelaDeCadastro;
