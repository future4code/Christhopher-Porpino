import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
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
  background: blue;
`

const Footer = styled.footer`
  width: 100%;
  height: 60px;
  background: blue;
  position: absolute;
  bottom: 0;
`

const ApplicationsPage = props => {
    console.log(props);
    return (
        <MainContainer>
            <Header>
                <div>
                    <button onClick={props.goToHome}>Home</button>
                </div>
                <div>
                <button disabled onClick={props.goToApplications}>Inscrições</button>
                <button onClick={props.goToCreateTrip}>Criar Viagem</button>
                <button onClick={props.goToTripList}>Ver Viagens</button>
                </div>
            </Header>
            <h1>Lista de Candidatos</h1>

            <Footer>
                <button onClick={props.goToHome}>Voltar</button>
            </Footer>
        </MainContainer>
    );
};

function mapDispatchToProps(dispatch) {
    return {
        goToHome: () => dispatch(push(routes.root)),
        goToCreateTrip: () => dispatch(push(routes.createTrip)),
        goToApplications: () => dispatch(push(routes.applications)),
        goToTripList: () => dispatch(push(routes.tripsList)),
    };
}

export default connect(
    null,
    mapDispatchToProps
)(ApplicationsPage);