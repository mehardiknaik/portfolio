import React, { useContext } from "react";
import { ThemeContext } from "../../providers/ThemeProvider";
import { Container } from "../common/Container/Container";
import { Details, IntroWrapper, Thumbnail, Wrapper } from "./style";
import dev from '../../assets/illustrations/dev.svg';

const Intro = () => {
  const { theme } = useContext(ThemeContext);
  console.log(theme)
  return (
    <Wrapper id="top">
      <IntroWrapper as={Container}>
        <Details theme={theme}>
          <h1>Hi There!</h1>
          <h4>I’m Hardik and I’m a Software Developer</h4>
        </Details>
        <Thumbnail>
          <img src={dev} alt="I’m Hardik and I’m a software developer" />
        </Thumbnail>
      </IntroWrapper>
    </Wrapper>
  );
};

export default Intro;
