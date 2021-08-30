import styled from "styled-components";

export const Wrap = styled.div`
  border: 1px solid #000;
  display: grid;
  place-items: center;
`;

export const FilterButton = styled.span`
  background: ${({ theme }) => theme.color.shape};
  padding: 0.625rem 2rem;
  border-radius: 0.5rem;
  cursor: pointer;
  position: relative;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  strong {
    margin: 0 1rem;
  }
`;

export const DropdownButton = styled.span`
  width: 250px;
  height: auto;
  background: ${({ theme }) => theme.color.background};
  padding: 0.625rem;
  border-radius: 0.5rem;
  position: relative;
  box-shadow: 0 0 60px 0 rgba(0, 0, 0, 0.2);

  &::before {
    content: "";
    position: absolute;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0 8px 8px 8px;
    border-color: transparent transparent
      ${({ theme }) => theme.color.background} transparent;
    top: -8px;
    left: calc(50% - 8px);
  }
`;
