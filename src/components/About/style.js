import styled from "styled-components";

export const Wrapper = styled.div`
  background-size: contain;
  background-position: left top;
  background-repeat: no-repeat;
`;
export const SkillsWrapper = styled.div`
  padding: 4rem 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 960px) {
    flex-direction: column-reverse;
  }
`;

export const Thumbnail = styled.div`
  flex: 1;
  width: 100%;
  margin-bottom: 2rem;
  @media (min-width: 960px) {
    min-width: 500px;
  }

  img {
    width: 100%;
  }
`;
export const DetailsWrapper = styled.div`
@media (min-width: 960px) {
padding-left: 2rem;
}
`
export const Details = styled.div`
  flex: 1;
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;

  @media (max-width: 960px) {
    padding-left: unset;
    width: 100%;
  }
`;
export const DetailWrapper = styled.div`
font-size: 20pt;
font-weight: normal;
line-height: 1.3;
color: ${({ theme }) => (theme === "dark" ? "#c7c7c7" : "#707070")};
display: flex;
gap: 1rem;
  mix-blend-mode: ${({ theme }) => (theme === "light" ? "inherit" : "inherit")};
}
`;
