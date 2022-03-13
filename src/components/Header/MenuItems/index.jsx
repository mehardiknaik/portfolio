import React from "react";
import { Wrapper } from "./style";
import AnchorLink from "react-anchor-link-smooth-scroll";
import ToggleTheme from "../ToggleTheme";

const MenuItems = ({isMobile=false}) => {
  const offset = 70;
  return (
    <Wrapper isMobile={isMobile}>
      <AnchorLink offset={offset} href="#skills">
        Skills
      </AnchorLink>
      <AnchorLink offset={offset} href="#projects">
        Projects
      </AnchorLink>
      <AnchorLink offset={offset} href="#about">
        About
      </AnchorLink>
      <ToggleTheme/>
    </Wrapper>
  );
};

export default MenuItems;
