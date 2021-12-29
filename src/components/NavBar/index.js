import React, { useState } from "react";

import { Wrapper, Content, Hamburger, Menu, MenuLink } from "./NavBar.styles";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Wrapper>
      <Content>
        <p>Web Developer</p>
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          <span />
          <span />
          <span />
        </Hamburger>
        <Menu isOpen={isOpen}>
          <MenuLink href="#">About Me</MenuLink>
          <MenuLink href="#">Projects</MenuLink>
          <MenuLink href="#">Contact</MenuLink>
        </Menu>
      </Content>
    </Wrapper>
  );
};

export default NavBar;
