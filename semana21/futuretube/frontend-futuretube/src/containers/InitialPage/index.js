import React, { Component, useEffect } from 'react';
import styled from 'styled-components'
import LogoImg from '../../img/logo-futuretube.png';
import { connect } from 'react-redux'
import { push } from 'connected-react-router'
import { routes } from '../Router/index'

const MainContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #fafafa;
  display: flex;
  justify-content: center;
  align-items: center;
`

const StyledImg = styled.img`
  width: 50%;
`

export function InitialPage(props) {
  useEffect(
    () => {
      setTimeout(
        () => { props.goToLogin() },
        3000
      )
    }, []
  )

  return (
    <MainContainer>
      <StyledImg src={LogoImg} alt="Logo Future Eats" />
    </MainContainer>
  );
}

const mapDispatchToProps = dispatch => ({
  goToLogin: () => dispatch(push(routes.login)),
})

export default connect(null, mapDispatchToProps)(InitialPage)