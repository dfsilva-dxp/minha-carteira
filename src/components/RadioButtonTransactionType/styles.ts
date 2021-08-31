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

  input[type="radio"] {
    display: none;
  }
  #recurrent:checked:checked ~ .recurrent {
    border-color: ${({ theme }) => theme.color.blue700};
    background: ${({ theme }) => theme.color.blue700};
  }
  #recurrent:checked:checked ~ .recurrent span {
    color: ${({ theme }) => theme.color.white};
  }

  #eventual:checked:checked ~ .eventual {
    border-color: ${({ theme }) => theme.color.red500};
    background: ${({ theme }) => theme.color.red500};
  }

  #eventual:checked:checked ~ .eventual span {
    color: ${({ theme }) => theme.color.white};
  }
`;

export const Options = styled.label`
  background: ${({ theme }) => theme.color.background};
  height: 100%;
  width: 100%;
  margin: 0 0.625rem;
  padding: 0 0.625rem;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;

  display: flex;
  align-items: center;
  justify-content: space-evenly;
  transition: all 0.3s ease;
`;
