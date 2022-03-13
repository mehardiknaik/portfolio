import React, { useContext } from "react";
import { Container } from "../common/Container/Container";
import {
  Details,
  DetailsWrapper,
  DetailWrapper,
  SkillsWrapper,
  Thumbnail,
  Wrapper,
} from "./style";
import about from "../../assets/illustrations/about.png";
import { ThemeContext } from "../../providers/ThemeProvider";
import Skills from "./Skills.json";
import { pathPrefix } from "../../data/config";

const About = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <Wrapper id="skills">
      <SkillsWrapper as={Container}>
        <Thumbnail>
          <img src={about} alt="I’m Hardik and I’m a software developer" />
        </Thumbnail>
        <DetailsWrapper>
          <h2>Skills</h2>
          <Details theme={theme}>
            {Skills.map(({ id, name, icon }) => (
              <DetailWrapper key={id}>
                <img width="24" src={`${pathPrefix}${icon}`} alt="" />
                <div>{name}</div>
              </DetailWrapper>
            ))}
          </Details>
        </DetailsWrapper>
      </SkillsWrapper>
    </Wrapper>
  );
};

export default About;
