import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  gap: 1.5rem;
  flex-direction:${({isMobile})=>(isMobile?'column':'row')};
  align-items: center;
`;
