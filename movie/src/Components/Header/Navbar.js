import React from "react";
import styled from "styled-components";
const Navbar = () => {
  return (
    <NavbarContainer>
      <h3>Movie-Mania</h3>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.nav`
  height: 10vh;
  display: flex;
  align-items: center;
  background-color: #5454d4;
  color: white;
  padding-left: 10px;
`;

export default Navbar;
