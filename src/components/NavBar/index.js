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
          <MenuLink href="#about" onClick={() => setIsOpen(false)}>
            About Me
          </MenuLink>
          <MenuLink href="#projects" onClick={() => setIsOpen(false)}>
            Projects
          </MenuLink>
          <MenuLink href="#" onClick={() => setIsOpen(false)}>
            Contact
          </MenuLink>
        </Menu>
      </Content>
    </Wrapper>
  );
};

export default NavBar;
