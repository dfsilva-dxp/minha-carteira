import styled from "styled-components";

export const Button = styled.button`
  border: 0;
  background-color: ${({ theme }) => theme.color.background};
  padding: 0.625rem 2rem;
  border-radius: 3.125rem;
  font-size: 0.875rem;
  color: ${({ theme }) => theme.color.text};

  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: filter 0.2s ease;

  &:hover {
    filter: brightness(0.8);
  }

  svg {
    margin-right: 0.5rem;
  }
`;
