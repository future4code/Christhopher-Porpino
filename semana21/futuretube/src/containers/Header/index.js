import React, { Component } from 'react';
import styled from 'styled-components';
import LogoImg from "../../img/logo-futuretube.png";
import SearchIcon from '@material-ui/icons/Search';

import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';



const StyledDiv = styled.div`
  display: flex;
  width: 100%;
  height: 48px;
  align-items: center;
  border-bottom: 1px solid grey;
  justify-content: flex-end;
  background-color: white;
  img {
    width: 78px;
    height: 48x;
    position: absolute;
    left: 16px;
  }
`

export function Header(props) {
  return (
    <StyledDiv>
      <img onClick={props.onClick} src={LogoImg} style={{ display: props.display }}></img>
      <SearchIcon />
      <div>
        <IconButton
          // aria-owns={open ? 'menu-appbar' : undefined}
          // aria-haspopup="true"
          // onClick={this.handleMenu}
          // color="inherit"
        >
          <AccountCircle />
        </IconButton>
        <Menu
          // id="menu-appbar"
          // anchorEl={anchorEl}
          // anchorOrigin={{
          //   vertical: 'top',
          //   horizontal: 'right',
          // }}
          // transformOrigin={{
          //   vertical: 'top',
          //   horizontal: 'right',
          // }}
          // open={open}
          // onClose={this.handleClose}
        >
          <MenuItem /* onClick={this.handleClose} */>Profile</MenuItem>
          <MenuItem /* onClick={this.handleClose} */>My account</MenuItem>
        </Menu>
      </div>
    </StyledDiv>
  )
}
