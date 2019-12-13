import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

const baseURL = "https://us-central1-spotif4.cloudfunctions.net/api"

class ViewAllPlaylists extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            allPlaylists: []
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

    componentDidMount() {
        this.getAllPlaylists()
    }

    render() {

        // const allPlaylists = this.state.allPlaylists.map(playlist => {
        //     return <li> {playlist.name} </li>
        // });

        return (
            <div>
                <h2>Todas as playlists: </h2>
                <ul>
                    {this.state.allPlaylists.map((playlist) => (
                    <li>{ playlist.name }</li>
                ))}
                </ul> 
            </div>
        )
    }
}

export default ViewAllPlaylists