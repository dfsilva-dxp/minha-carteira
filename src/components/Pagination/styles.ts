import styled from "styled-components";

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: space-between;

  p {
    font-size: 0.875rem;
    font-weight: 600;
  }
`;

export const WrapButton = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  button {
    width: 2.5rem;
    height: 2.5rem;
    background: ${({ theme }) => theme.color.shape};
    color: ${({ theme }) => theme.color.text};
    border: 0;
    font-size: 0.875rem;
    font-weight: 600;
    transition: filter 0.2s ease-out;

    &:hover,
    &:not(:disabled) {
      filter: brightness(0.8);
    }
  }
`;
