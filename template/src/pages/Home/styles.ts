import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100vh;
  position: relative;
`;

export const Main = styled.main`
  h1 {
    text-transform: uppercase;
    font-size: 1.6rem;
  }
`;

export const Footer = styled.footer`
  display: flex;

  position: absolute;
  bottom: 10px;
`;
