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
  background: violet;
`

const Footer = styled.footer`
  width: 100%;
  height: 60px;
  background: violet;
  position: absolute;
  bottom: 0;
`

class TripDetailsPage extends React.Component {
    
    componentDidMount() 
        this.props.fetchTripDetails(this.props.selectedTripId) //mexer aqui
    };

    render() {

        console.log(this.props);

        return (
            <MainContainer>
                <Header>
                    <div>
                        <button onClick={this.props.goToHome}>Home</button>
                    </div>
                    <div>
                        <button onClick={this.props.goToApplications}>Inscrições</button>
                        <button onClick={this.props.goToCreateTrip}>Criar Viagem</button>
                        <button onClick={this.props.goToTripList}>Ver Viagens</button>
                    </div>
                </Header>

                <section>
                    {this.props.trips.map((trip) => (
                        <h1>
                            Detalhes da Viagem - {trip.name}
                        </h1>
                    ))}
                    {/* <div>
                    {props.trips.map((trip) => (
                        <div>
                            Viagem: {trip.name},
                                Planeta: {trip.planet},
                                Data: {trip.date},
                                Descrição: {trip.description},
                                Dias de Duração: {trip.durationInDays}
                        </div>
                    ))}
                    </div> */}
                </section>

                <Footer>
                    <button onClick={this.props.goToHome}>Home</button>
                </Footer>
            </MainContainer>
        );
    }
};

const mapStateToProps = state => ({
    trips: state.trips.allTrips,
    selectedTripId: state.trips.selectedTripId,
    candidates: state.trips.candidates
});

function mapDispatchToProps(dispatch) {
    return {
        goToHome: () => dispatch(push(routes.root)),
        goToApplications: () => dispatch(push(routes.applications)),
        goToCreateTrip: () => dispatch(push(routes.createTrip)),
        goToTripList: () => dispatch(push(routes.tripsList)),
        // fetchTripDetails: () => dispatch(getTripDetails())
    };
}

export default connect(
    mapStateToProps,
    // null,
    mapDispatchToProps
)(TripDetailsPage);