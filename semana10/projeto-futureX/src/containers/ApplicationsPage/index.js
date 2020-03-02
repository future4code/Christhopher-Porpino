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
            {/* <ol>
                {this.props.trips.map((trip) => (
                    <li>
                        Viagem: {trip.name},
                        Planeta: {trip.age},
                        Data: {trip.applicationText},
                        Descrição: {trip.profession},
                        Dias de Duração: {trip.country}
                        TripId: {trip.trip}
                    </li>
                    name: "Soter Padua",
                    age: 23, // Tem que ser maior de 18 anos
                    applicationText: "Sou um bom candidato por X, Y e Z", // Resposta de "porque sou um bom candidato(a)?"
                    profession: "Capturador de Bug", // Campo aberto
                    country: "Brasil", // Idealmente um dropdown
                    trip
                ))}
            </ol> */}
            <Footer>
                <button onClick={props.goToHome}>Voltar</button>
            </Footer>
        </MainContainer>
    );
};

// const mapStateToProps = state => ({
//     trips: state.trips.allTrips
// });

function mapDispatchToProps(dispatch) {
    return {
        goToHome: () => dispatch(push(routes.root)),
        goToCreateTrip: () => dispatch(push(routes.createTrip)),
        goToApplications: () => dispatch(push(routes.applications)),
        goToTripList: () => dispatch(push(routes.tripsList)),
        // fetchAllCandidates: () => dispatch(getTrips())
    };
}

export default connect(
    // mapStateToProps,
    null,
    mapDispatchToProps
)(ApplicationsPage);