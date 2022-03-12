import React, { useContext } from "react";
import { Container } from "../common/Container/Container";
import { Details, DetailWrapper, SkillsWrapper, Thumbnail, Wrapper } from "./style";
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
          <img
            src={about}
            alt="I’m John and I’m a Backend & Devops engineer!"
          />
        </Thumbnail>
        <Details theme={theme}>
          {Skills.map(({ id, name, icon }) => (
            <DetailWrapper key={id}>
              <img width="24" src={`${pathPrefix}${icon}`} alt="" />
              <div>{name}</div>
            </DetailWrapper>
          ))}
        </Details>
      </SkillsWrapper>
    </Wrapper>
  );
};

export default About;
