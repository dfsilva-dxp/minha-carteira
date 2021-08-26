import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.color.shape};
  padding: 1rem 2.5rem;

  display: flex;
  align-items: center;

  grid-area: H;
`;

export const Wrap = styled.span`
  margin-left: auto;

  display: flex;
  align-items: center;
`;
