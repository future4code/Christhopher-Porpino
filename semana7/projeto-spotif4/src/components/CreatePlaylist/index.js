import React from 'react';
// import styled from 'styled-components';
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

    // createPlaylist = () => {
    //     const url = `${baseURL}/playlists/createPlaylist`
    //     const token = "christhopher"

    //     const data = {
    //         "name": "teste"
    //     }

    //     const axiosConfig = {
    //         header: {
    //             // "Content-Type": "application/json"
    //             auth: token
    //         }
    //     }

    //     const requestCreatePlaylist = axios.post(url, data, axiosConfig)

    //     requestCreatePlaylist.then((response) => {
    //         console.log(response.data)
    //         // this.getAllPlaylists();
    //     })
    // }

    // // onNameInputChange = (e) => {
    // //     this.setState({ name: e.target.value })
    // // }



    render() {
        return (
            <div>
                <label>Nome da nova playlist: </label>
                <input type="text"
                // onChange={this.onNameInputChange}
                // value={this.state.name} 
                />
                <button
                // onClick={this.createPlaylist()}
                >
                    Criar
                </button>
            </div>
        )
    }
}

export default CreatePlaylist