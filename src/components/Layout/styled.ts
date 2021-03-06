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

export const Content = styled.section`
  grid-area: S;

  overflow-x: hidden;
  overflow-y: auto;
`;
