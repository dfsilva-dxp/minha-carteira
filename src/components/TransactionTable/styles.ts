import styled from "styled-components";

export const Wrapper = styled.section``;

export const Table = styled.table`
  width: 100%;
  border-spacing: 0 0.5rem;

  th {
    padding: 1rem 2rem;
    font-weight: 600;
    line-height: 1.5rem;
    text-align: left;
    color: ${({ theme }) => theme.color.gray400};
  }

  tbody tr {
    background: ${({ theme }) => theme.color.shape};
    border-radius: 0.25rem;
    border: 0;

    td {
      padding: 1rem 2rem;
      color: ${({ theme }) => theme.color.gray400};

      &:first-child {
        font-weight: 600;
      }

      &.deposit,
      &.withdraw {
        font-weight: 600;
      }

      &.deposit {
        color: ${({ theme }) => theme.color.green300};
      }

      &.withdraw {
        color: ${({ theme }) => theme.color.red500};
      }

      &:first-child.eventual,
      &:first-child.recurrent {
        position: relative;
        color: ${({ theme }) => theme.color.text};

        &::before {
          content: "";
          position: absolute;
          width: 5px;
          height: 100%;
          left: 0;
          top: 0;
          border-radius: 0.25rem 0 0 0.25rem;
        }
      }
      &:first-child.eventual {
        &::before {
          background: ${({ theme }) => theme.color.blue700};
        }
      }

      &:first-child.recurrent {
        &::before {
          background: ${({ theme }) => theme.color.red500};
        }
      }
    }
  }
`;
