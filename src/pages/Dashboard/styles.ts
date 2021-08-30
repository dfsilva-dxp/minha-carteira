import styled from "styled-components";

export const Container = styled.section`
  padding: 0 2rem;
  padding-bottom: 1rem;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 5rem repeat(4, 1fr);
  gap: 1.25rem;

  grid-template-areas:
    "HEADER   HEADER    HEADER"
    "BALANCE  DEPOSIT   WITHDRAWL"
    "STORY    STORY     STORY"
    "WRAP     WRAP      WRAP";
`;
