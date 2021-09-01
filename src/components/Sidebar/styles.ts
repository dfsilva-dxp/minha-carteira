import styled from "styled-components";

export const Aside = styled.aside`
  background: ${({ theme }) => theme.color.shape};

  grid-area: AS;
`;

export const Logo = styled.span`
  width: 5rem;
  height: 5rem;
  padding: 0.5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 40%;
  }
`;

export const Nav = styled.nav`
  width: 100%;
  height: table;
  padding: 1rem 0;

  ul li a {
    width: 5rem;
    height: 3rem;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    justify-content: center;

    transition: all 0.2s ease-out;

    &:hover,
    &.active {
      background: ${({ theme }) => theme.color.background};
      position: relative;
      color: ${({ theme }) => theme.color.green300};

      &::after {
        content: "";
        width: 4px;
        height: 100%;
        background: ${({ theme }) => theme.color.green300};
        position: absolute;
        left: 0;
      }
    }
  }
`;
