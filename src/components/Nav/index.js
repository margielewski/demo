import React, { useState } from "react";

import {
  StyledHeader,
  StyledNav,
  StyledList,
  StyledListItem,
  StyledLink,
  StyledImg,
  StyledLogoLink
} from "./style";

import MenuIcon from "../MenuIcon";

import logo from "../../assets/logo.png";

const routes = [
  {
    to: "/",
    name: "Character"
  }
];

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledHeader>
      <MenuIcon isOpen={isOpen} onClick={() => setIsOpen((prev) => !prev)} />
      <StyledLogoLink to="/">
        <StyledImg>
          <img src={logo} alt="rickandmorty logo" />
        </StyledImg>
      </StyledLogoLink>
      <StyledNav isOpen={isOpen}>
        <StyledList>
          {routes.map(({ name, to }) => (
            <StyledListItem key={name}>
              <StyledLink onClick={() => setIsOpen(false)} to={to}>
                {name}
              </StyledLink>
            </StyledListItem>
          ))}
        </StyledList>
      </StyledNav>
    </StyledHeader>
  );
}
