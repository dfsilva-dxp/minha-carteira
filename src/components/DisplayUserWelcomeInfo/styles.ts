import styled from "styled-components";

export const Wrap = styled.div`
  background: ${({ theme }) => theme.color.shape}
    url(${({ theme }) => theme.waves}) no-repeat top center;
  padding: 1rem;
  border-radius: 5px;

  display: grid;
  grid-template-rows: 2.5rem 1fr;
  align-items: center;
  grid-area: WELCOME;

  box-shadow: 0 0 60px 0 rgba(0, 0, 0, 0.05);
`;

export const Display = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  gap: 1rem;
`;

export const Info = styled.span`
  flex: 1;

  h1 {
    padding: 1rem 0;
    font-size: 2.5rem;
    line-height: 2.5rem;
    font-weight: 500;
    text-transform: uppercase;
  }

  p {
    font-size: 0.875rem;
  }
`;

export const Picture = styled.picture`
  width: min(10rem, 100%);

  img {
    width: 100%;
  }
`;
