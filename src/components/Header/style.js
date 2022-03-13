import AnchorLink from "react-anchor-link-smooth-scroll";
import styled from "styled-components";
export const Wrapper = styled.div`
  background: ${({ theme }) => (theme === "light" ? "#ffffff9e" : "#3636369e")};
  box-shadow: ${({ theme }) => (theme === "light" ?"#00000033 0px 1px 2px 0px, #00000030 0px 2px 5px 0px" : "#6a6a6a33 0px 1px 2px 0px, #6d6d6d30 0px 2px 5px 0px")};
  height: fit-content;

  position: fixed;
  border-radius: 1rem;
  top: 1rem;
  padding: 20px;
  left: 50%;
  transform: translatex(-50%);
  backdrop-filter: blur(10px);
  a {
    text-decoration: none;
    color: ${({ theme }) => (theme === "light" ? "#000" : "#fff")};
  }
  max-width: 1280px;
  width: 80%;
`;
export const MenuWrapper = styled.div``;
export const MenuItemWrapper = styled.div`
  @media (max-width: 960px) {
    display: none;
  }
`;
export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const MobileMenuWrapper = styled.div`
  transition: max-height 0.6s ease-out;
  overflow: hidden;
  max-height: ${({ isOpen }) => (isOpen ? "500px" : "0px")};
  @media (min-width: 960px) {
    max-height: 0;
  }
`;
export const Title = styled(AnchorLink)`
  font-size: 1.5rem;
  font-weight: bold;
  @media (max-width: 960px) {
    font-size: 1.2rem;
  }
`;
