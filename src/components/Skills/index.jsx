import React, { useContext } from "react";
import { Container } from "../common/Container/Container";
import { Details, SkillsWrapper, Thumbnail, Wrapper } from "./style";
import dev from '../../assets/illustrations/skills.svg';
import { ThemeContext } from "../../providers/ThemeProvider";

const Skills = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Wrapper id="about">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <img src={dev} alt="I’m John and I’m a Backend & Devops engineer!" />
        </Thumbnail>
        <Details theme={theme}>
          <h1>More about me</h1>
          <p>Hi, i am Hardik i like to develope web applications by using REACT ang ANGULAR.</p>
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};

export default Skills;
