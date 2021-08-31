import styled from "styled-components";

export const Container = styled.section`
  width: 100%;
  padding: 1rem 0;
  display: grid;
  place-items: center;
`;

export const Wrapper = styled.div`
  display: inline-flex;
  background: ${({ theme }) => theme.color.shape};
  width: min(370px, 100%);
  height: 3rem;
  padding: 0.5rem;
  border-radius: 0.5rem;
  align-items: center;
  justify-content: space-evenly;
`;

export const Options = styled.label`
  margin: 0.5rem 0;
  padding: 0.5rem;
  border-radius: 50px;
  transition: background 0.2s ease;
  -webkit-tap-highlight-color: transparent;
  cursor: pointer;
  display: inline-flex;
  align-items: center;

  &:hover,
  &:focus-within {
    background: ${({ theme }) => theme.color.background};
  }

  input {
    vertical-align: middle;
    width: 1rem;
    height: 1rem;
    border-radius: 0.625rem;
    background: none;
    padding: 0;
    margin: 0;
    border: 0;
    box-shadow: inset 0 0 0 1px ${({ theme }) => theme.color.background};
    box-shadow: inset 0 0 0 1.5px ${({ theme }) => theme.color.background};
    appearance: none;
    transition: box-shadow 150ms cubic-bezier(0.95, 0.15, 0.5, 1.25);
    pointer-events: none;

    &:focus {
      outline: none;
    }

    &:checked {
      box-shadow: inset 0 0 0 6px ${({ theme }) => theme.color.green300};
    }
  }

  span {
    vertical-align: middle;
    display: inline-block;
    line-height: 1.25rem;
    padding: 0 0.5rem;
    font-weight: 600;
  }
`;
