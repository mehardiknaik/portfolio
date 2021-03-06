import React, { useContext } from "react";
import { ThemeContext } from "../../../providers/ThemeProvider";
import { Wrapper } from "./style";
import moonIcon from '../../../assets/icons/moon.svg';
import sunIcon from '../../../assets/icons/sun.svg';

const ToggleTheme = () => {
    const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <Wrapper type="button" onClick={toggleTheme}>
      <img src={theme === "light" ? moonIcon : sunIcon} alt={theme} />
    </Wrapper>
  );
};

export default ToggleTheme;
