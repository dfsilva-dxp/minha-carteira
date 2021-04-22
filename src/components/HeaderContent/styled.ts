import styled from "styled-components";

export const HeaderContent = styled.header`
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 250px;
  gap: 1.25rem;
  div.box {
    background: ${({ theme }) => theme.colors.shape};
    border-radius: 5px;
    padding: 10px;
  }
  div.box:first-child {
    background: ${({ theme }) => theme.colors.shape}
      url(${({ theme }) => theme.waves}) no-repeat top center;
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 2.5rem 1fr;
    > div {
      display: flex;
      align-items: center;
      justify-content: space-between;
      span:last-child {
        width: 100%;
        max-width: 450px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          width: 150px;
        }
      }
    }
  }
`;
