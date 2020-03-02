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
  background: green;
`

const Footer = styled.footer`
  width: 100%;
  height: 60px;
  background: green;
  position: absolute;
  bottom: 0;
`

class FormPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            postValue: "" //lembrar de mudar nome disso aqui
        };
    }

    onChangePost = event => {
        this.setState({ postValue:event.target.value});
    }

    render() {
        return (
            <MainContainer>
                <Header>
                    <button onClick={this.props.goToHome}>Voltar</button>
                    <button onClick={this.props.goToLogin}>Login</button>
                </Header>
                <h1>Formulário de inscrição</h1>

                <Footer>
                    <button onClick={this.props.goToHome}>Voltar</button>
                </Footer>
            </MainContainer>
        );
    };
}

function mapDispatchToProps(dispatch) {
    return {
        goToLogin: () => dispatch(replace(routes.login)),
        goBack: () => dispatch(goBack()),
        goToHome: () => dispatch(push(routes.root))
    };
}

export default connect(
    null,
    mapDispatchToProps
)(FormPage);