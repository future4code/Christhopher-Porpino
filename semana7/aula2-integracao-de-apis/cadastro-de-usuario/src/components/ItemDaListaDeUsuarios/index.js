import React from 'react';
import axios from 'axios';

const baseUrl = "https://us-central1-future4-users.cloudfunctions.net/api";

class ItemDaListaDeUsuarios extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allUsers: [],
        }
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

    render() {

        const listaDeUsuariosCadastrados = this.state.allUsers.map(user => {
            return <li> {user.name} </li>
        });

        return (
            <div>
                <ul>
                    {listaDeUsuariosCadastrados}
                    <li> Nome X</li>
                </ul>
            </div>
        )
    }
}

export default ItemDaListaDeUsuarios