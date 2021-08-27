import styled from "styled-components";

export const Input = styled.input`
  height: 2.5rem;
  padding: 0.5rem;
  border: 0;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.color.white};
  box-shadow: 0 0 60px 0 rgba(0, 0, 0, 0.05);
  text-transform: capitalize;
  font-size: 0.875rem;
`;
