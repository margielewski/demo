import styled from "styled-components";

import { Link } from "react-router-dom";

export const StyledHeader = styled.header`
  padding: 0.5rem 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #17213f;
  box-shadow: 0 2px 20px rgba(255, 255, 255, 0.12);
  z-index: 2;
`;

export const StyledNav = styled.nav`
  z-index: -1;
  position: absolute;
  width: 100%;
  top: 100%;
  left: 0;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  background-color: #17213f;
  height: 100vh;
  min-height: 500px;
  transform: ${({ isOpen }) =>
    isOpen ? "translateY(0)" : "translateY(-100%)"};
  transition: transform 0.4s ease-in-out;
`;

export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledListItem = styled.li`
  list-style: none;
  border-bottom: 1px solid #37b0c6;
`;

export const StyledLogoLink = styled(Link)`
  text-decoration: none;
  display: block;
  padding: 0 2rem;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  display: block;
  padding: 2rem;
  text-align: center;
  text-transform: uppercase;
  font-weight: 500;
  letter-spacing: 0.3rem;
`;

export const StyledImg = styled.figure`
  width: 10rem;
  img {
    width: 100%;
    height: 100%;
  }
`;
