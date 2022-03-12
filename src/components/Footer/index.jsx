import React from "react";
import { Container } from "../common/Container/Container";
import social from "./social.json";
import { Wrapper, Flex, Links, Details } from "./style";
import {pathPrefix} from "../../data/config";

const Footer = () => {
  return (
    <Wrapper>
      <Flex as={Container}>
        <Details>
          <h2>Hardik Naik</h2>
          <span>
            © All rights are reserved | {new Date().getFullYear()} | Made with{" "}
            <span aria-label="love" role="img">
              💖
            </span>{" "}
            by{" "}
            {/* <a
              href="https://smakosh.com/?ref=portfolio-dev"
              rel="noopener noreferrer"
              target="_blank"
            > */}
            Hardik Naik
            {/* </a> */}
          </span>
        </Details>
        <Links>
          {social.map(({ id, name, link, icon }) => (
            <a
              key={id}
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`follow me on ${name}`}
            >
              <img
                width="24"
                src={`${pathPrefix}${icon}`}
                alt={name}
              />
            </a>
          ))}
        </Links>
      </Flex>
    </Wrapper>
  );
};

export default Footer;
