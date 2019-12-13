import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const baseURL = "https://us-central1-spotif4.cloudfunctions.net/api"

class CreatePlaylist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allPlaylists: {}
        }
    }

    render() {
        return (
            <div>
                <label>Nome da nova playlist: </label>
                <input></input>
            </div>
        )
    }
}

export default CreatePlaylist