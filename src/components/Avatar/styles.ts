import styled from "styled-components";

export const Wrapper = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;

  span:last-child {
    margin-left: 1rem;
  }
`;

export const Avatar = styled.span`
  width: 3.25rem;
  height: 3.25rem;
  border-radius: 3.5rem;
  border: 2px solid ${({ theme }) => theme.color.green500};
  font-size: 1.125rem;
  font-weight: 400;

  display: flex;
  align-items: center;
  justify-content: center;
`;
