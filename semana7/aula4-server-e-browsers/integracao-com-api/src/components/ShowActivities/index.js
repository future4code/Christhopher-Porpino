import React from 'react';
// import styled from 'styled-components';
import axios from 'axios';

const baseURL = "https://www.boredapi.com/api/activity";

class ShowActivities extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            currentActivity: {}
        }
    }

    getRandomActivity = async () => {
        const response = await axios.get(baseURL);
        this.setState ({currentActivity: response.data })
    }

    componentDidMount(){
        this.getRandomActivity();
    }

    render (){
        return (
            <div>
                <h3>Nome: { this.state.currentActivity.activity }</h3>
                <h3>Categoria: { this.state.currentActivity.type }</h3>
                <h3>Número de participantes { this.state.currentActivity.participants }</h3>
            </div>
        )
    }
}

export default ShowActivities