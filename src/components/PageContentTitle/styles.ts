import styled from "styled-components";

export const Wapper = styled.header`
  width: 100%;
  height: 5rem;
  padding: 1rem 0;

  grid-area: HEADER;
  display: flex;

  h2 {
    text-transform: capitalize;
  }

  div {
    margin-left: auto;
  }
`;
