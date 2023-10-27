import { Layout } from "antd";
import React from "react";
import styled from "styled-components";
// import RegisterDrawer from "./RegisterDrawer";
// import LoginDrawer from "./LoginDrawer";
import CreateFurniturDrawer from "./CreateFurnitureDrawer";

function Header() {
  return (
    <Container>
      <img src={require("../public/star.png")} alt="Logo" />
      <Nav>
        <a href="/">Home</a>
        <a href="/cupboard">Cupboard</a>
        <a href="/shelf">shelf</a>
        <CreateFurniturDrawer />
        {/* <RegisterDrawer />
        <LoginDrawer /> */}
      </Nav>
    </Container>
  );
}

export default Header;

const Container = styled(Layout)`
  height: 70px;
  background: #606c5a;
  display: grid;
  font-size: 16px;
  grid-template-areas: "logo nav";
`;

const Nav = styled.nav`
  display: grid;
  grid-template-columns: repeat(4, auto);
  align-items: center;
  justify-content: end;

  a {
    color: white;
    padding-right: 30px;
  }
`;


