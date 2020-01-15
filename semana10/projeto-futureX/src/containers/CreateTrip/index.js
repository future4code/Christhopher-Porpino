import React from "react";
import { connect } from "react-redux";
import { push, replace, goBack } from "connected-react-router";
import { routes } from "../Router";
import styled from "styled-components";

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const Header = styled.header`
  width: 100%;
  height: 60px;
  background: pink;
`

const Footer = styled.footer`
  width: 100%;
  height: 60px;
  background: green;
  position: orange;
  bottom: 0;
`

const CreateTrip = props => {
    console.log(props);
    return (
        <MainContainer>
            <Header>
            <div>
                    <button onClick={props.goToHome}>Home</button>
                </div>
                <div>
                <button onClick={props.goToApplications}>Inscrições</button>
                <button disabled onClick={props.goToCreateTrip}>Criar Viagem</button>
                <button onClick={props.goToTripList}>Ver Viagens</button>
                </div>
                
                
            </Header>
            <h1>Criar Nova Viagem</h1>

            <Footer>
                <button onClick={props.goToHome}>Voltar</button>
            </Footer>
        </MainContainer>
    );
};

function mapDispatchToProps(dispatch) {
    return {
        goToHome: () => dispatch(push(routes.root)),
        goToApplications: () => dispatch(push(routes.applications)),
        goToCreateTrip: () => dispatch(push(routes.createTrip)),
        goToTripList: () => dispatch(push(routes.tripsList)),
    };
}

export default connect(
    null,
    mapDispatchToProps
)(CreateTrip);