import styled from "styled-components";

export const Grid = styled.main`
  height: 100vh;

  display: grid;
  grid-template-columns: 5rem auto;
  grid-template-rows: 5rem auto;

  grid-template-areas:
    "AS H"
    "AS S";
`;

export const Header = styled.header`
  border: 1px solid #000;
  grid-area: H;
`;

export const Aside = styled.aside`
  border: 1px solid #000;
  grid-area: AS;
`;

export const Content = styled.section`
  border: 1px solid #000;
  grid-area: S;

  overflow-x: hidden;
  overflow-y: auto;
`;
