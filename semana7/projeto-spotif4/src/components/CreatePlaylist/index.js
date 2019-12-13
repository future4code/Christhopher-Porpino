import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const baseURL = "https://us-central1-spotif4.cloudfunctions.net/api"

class CreatePlaylist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allPlaylists: [],
            name: '',
        };
    }

    createPlaylist = () => {
        const url = `${baseURL}//playlists/createPlaylist`
        const token = "christhopher"

        const data = {
            "name": this.state.name
        }

        const requestCreatePlaylist = axios.post(url, data, {
            header: {
                auth: token
            }
        });

        requestCreatePlaylist.then((response) => {
            console.log(response.data.result.list)
            this.getAllUsers();
        })
    }

    componentDidMount() {
        this.createPlaylist();
    }

    onNameInputChange = (e) => {
        this.setState({ name: event.target.value })
    }



    render() {
        return (
            <div>
                <label>Nome da nova playlist: </label>
                <input></input>
                <button onClick={() => this.createPlaylist()}>
                    Criar
                </button>
            </div>
        )
    }
}

export default CreatePlaylist