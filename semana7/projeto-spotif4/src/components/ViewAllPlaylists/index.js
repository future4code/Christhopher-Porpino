import React from 'react';
// import styled from 'styled-components';
import axios from 'axios';

const baseURL = "https://us-central1-spotif4.cloudfunctions.net/api"

class ViewAllPlaylists extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allPlaylists: [],
            name: '',
        }
    }

    getAllPlaylists = () => {
        const token = "christhopher"

        const axiosConfig = {
            headers: {
                auth: token,
            }
        }

        const requestGetAllPlaylists = axios.get(`${baseURL}/playlists/getAllPlaylists`, axiosConfig)

        requestGetAllPlaylists.then((response) => {
            const allPlaylists = response.data.result.list
            console.log(allPlaylists);
            this.setState({ allPlaylists: allPlaylists })
        })
    }

    createPlaylist = () => {
        const url = `${baseURL}/playlists/createPlaylist`;
        const token = "christhopher";

        const axiosConfig = {
            headers: {
                auth: token,
            }
        }

        const data = {
            name: this.state.name,
        }

        const request = axios.post(url, data, axiosConfig);

        // request.then((response) => {
        //     console.log(response.data);
        // }).catch((error) => {
        //     console.log(error);
        // })
        request.then((response) => {
            alert("Playlist criada com sucesso");
        }).catch((error) => {
            alert(error.message);
        })
    }

    onNameInputChange = (e) => {
        this.setState({ name: e.target.value })
    }

    componentDidMount() {
        this.getAllPlaylists()
    }

    render() {

        // const allPlaylists = this.state.allPlaylists.map(playlist => {
        //     return <li> {playlist.name} </li>
        // });

        return (
            <div>
                <div>
                    <label>Nome da nova playlist: </label>
                    <input type="text"
                        onChange={this.onNameInputChange}
                        value={this.state.name}
                    />
                    <button
                        // onClick = {() => this.createPlaylist()}
                        onClick={() => this.createPlaylist()}
                    >
                        Criar
                </button>
                </div>

                <div><h2>Todas as playlists: </h2>
                    <ul>
                        {this.state.allPlaylists.map((playlist) => (
                            <li>{playlist.name}</li>
                        ))}
                    </ul>
                </div>
            </div>
        )
    }
}

export default ViewAllPlaylists