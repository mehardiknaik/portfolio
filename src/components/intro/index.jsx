import React, { useContext } from "react";
import { ThemeContext } from "../../providers/ThemeProvider";
import { Container } from "../common/Container/Container";
import { Details, IntroWrapper, Thumbnail, Wrapper } from "./style";
import dev from '../../assets/illustrations/dev.svg';

const Intro = () => {
  const { theme } = useContext(ThemeContext);
  console.log(theme)
  return (
    <Wrapper>
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>Hi There!</h1>
          <h4>I’m John and I’m a JAMStack engineer!</h4>
        </Details>
        <Thumbnail>
          <img src={dev} alt="I’m John and I’m a JAMStack engineer!" />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};

export default Intro;
