import React from "react";
import { connect } from "react-redux";
import { push, replace, goBack } from "connected-react-router";
import { routes } from "../Router"
import styled from "styled-components";


const HomeScreen = props => {
    console.log(props);
    return (
        <div>
            <div>Home</div>
            <button onClick={props.goToLogin}>LOGIN</button>
            <button onClick={props.goFormPage}>Inscreva-se</button>
            <button onClick={props.goToCreateTrip}>Criar Viagem</button>
            <button onClick={props.goToTripList}>Ver Viagens</button>
        </div>
    );
};

function mapDispatchToProps(dispatch) {
    return {
        goToLogin: () => dispatch(replace(routes.login)),
        goBack: () => dispatch(goBack()),
        goHome: () => dispatch(replace(routes.root)),
        goFormPage: () => dispatch(push(routes.formPage)),
        goToCreateTrip: () => dispatch(push(routes.createTrip)),
        goToTripList: () => dispatch(push(routes.tripsList)),
    };
}

export default connect(
    null,
    mapDispatchToProps
)(HomeScreen);