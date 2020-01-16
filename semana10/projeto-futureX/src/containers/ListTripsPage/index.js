import React from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";
import styled from "styled-components";
import { getTrips } from "../../actions/tripsActions";

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const Header = styled.header`
  width: 100%;
  height: 60px;
  background: orange;
`

const Footer = styled.footer`
  width: 100%;
  height: 60px;
  background: orange;
  position: absolute;
  bottom: 0;
`

class ListTripsPage extends React.Component {

    componentDidMount(){
        this.props.fetchAllTrips()
    };

    
    render(){
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
                        <button disabled onClick={this.props.goToTripList}>Ver Viagens</button>
                    </div>
                </Header>
                <section>
                    <h1>Lista de Viagens</h1>
                    <ol>
                        {this.props.trips.map((trip) => (<p>{trip.name}</p>))}
                    </ol>
                </section>
                <button onClick={this.props.goToTripDetailsPage}>Ver Detalhes</button>
                <Footer>
                    <button onClick={this.props.goToHome}>Voltar</button>
                </Footer>
            </MainContainer>
        );
    }
};

const mapStateToProps = state => ({
    trips: state.trips.allTrips
});

function mapDispatchToProps(dispatch) {
    return {
        goToHome: () => dispatch(push(routes.root)),
        goToCreateTrip: () => dispatch(push(routes.createTrip)),
        goToApplications: () => dispatch(push(routes.applications)),
        goToTripDetailsPage: () => dispatch(push(routes.tripDetails)),
        fetchAllTrips: () => dispatch(getTrips())
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListTripsPage);