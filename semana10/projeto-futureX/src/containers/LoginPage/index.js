import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";
import { routes } from "../Router";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const LoginWrapper = styled.form`
  width: 100%;
  height: 100%;
  gap: 10px;
  place-content: center;
  justify-items: center;
  display: grid;
`;

const Header = styled.header`
  width: 100%;
  height: 60px;
  background: red;
`

const Footer = styled.footer`
  width: 100%;
  height: 60px;
  background: red;
`

class LoginPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleFieldChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    const { email, password } = this.state;

    return (
      <MainContainer>
        <Header>
          <button onClick={this.props.goToHome}>Home</button>
        </Header>
        <LoginWrapper>
          <TextField
            onChange={this.handleFieldChange}
            name="email"
            type="email"
            label="E-mail"
            value={email}
          />
          <TextField
            onChange={this.handleFieldChange}
            name="password"
            type="password"
            label="Password"
            value={password}
          />
          <Button onClick={this.props.goToApplications}>Login</Button>
        </LoginWrapper>
        <Footer>
          <button onClick={this.props.goToHome}>Voltar</button>
        </Footer>
      </MainContainer>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    goToHome: () => dispatch(push("/")),
    goToApplications: () => dispatch(push(routes.applications)),
  };
}

export default connect(
  null,
  mapDispatchToProps
)(LoginPage);