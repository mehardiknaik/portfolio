import React, { useContext, useState } from "react";
import config from "../../data/config";
import { ThemeContext } from "../../providers/ThemeProvider";
import Hamburger from "./Hamburger";
import MenuItems from "./MenuItems";
import {
  MenuWrapper,
  Wrapper,
  MenuItemWrapper,
  HeaderWrapper,
  MobileMenuWrapper,
  Title,
} from "./style";

const Header = () => {
  const { theme } = useContext(ThemeContext);
  const [sidebar, toggle] = useState(false);
  return (
    <Wrapper theme={theme}>
      <HeaderWrapper>
        <Title href="#top">{config.defaultTitle}</Title>
        <MenuWrapper>
          <MenuItemWrapper>
            <MenuItems />
          </MenuItemWrapper>
          <Hamburger sidebar={sidebar} toggle={toggle} />
        </MenuWrapper>
      </HeaderWrapper>
      {sidebar && (
        <MobileMenuWrapper onClick={() => toggle(false)}>
          <MenuItems isMobile />
        </MobileMenuWrapper>
      )}
    </Wrapper>
  );
};

export default Header;
