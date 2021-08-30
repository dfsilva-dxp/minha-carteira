import styled from "styled-components";

export const Wrap = styled.div`
  padding: 0 1rem;
  display: grid;
  place-items: center;
`;

export const FilterButton = styled.span`
  background: ${({ theme }) => theme.color.shape};
  padding: 0.625rem 2rem;
  border-radius: 0.5rem;
  cursor: pointer;
  position: relative;
  transform: rotate(0);
  z-index: 5;

  display: flex;
  align-items: center;
  justify-content: space-evenly;

  strong {
    margin: 0 1rem;
    text-transform: capitalize;
  }

  svg.rotate-in {
    animation: rotateIn 0.2s linear 0.1s 1 normal forwards;
  }

  svg.rotate-out {
    transform: rotate(180deg);
    animation: rotateOut 0.2s linear 0.1s 1 normal forwards;
  }

  @keyframes rotateIn {
    0% {
      transform: rotate(0);
    }
    50% {
      transform: rotate(90deg);
    }
    100% {
      transform: rotate(180deg);
    }
  }

  @keyframes rotateOut {
    0% {
      transform: rotate(180deg);
    }
    50% {
      transform: rotate(90deg);
    }
    100% {
      transform: rotate(0);
    }
  }
`;

export const DropdownContent = styled.span`
  width: 250px;
  height: auto;
  background: ${({ theme }) => theme.color.background};
  padding: 0.625rem;
  position: relative;
  bottom: -0.875rem;
  border-radius: 0.5rem;
  box-shadow: 0 0 60px 0 rgba(0, 0, 0, 0.2);
  opacity: 0;
  transform: translateY(-30px);

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

  &.fade-in {
    animation: fadeIn 0.2s ease-out 0.1s 1 normal forwards;
  }

  @keyframes fadeIn {
    50% {
      opacity: 0.5;
      transform: translateY(-15px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @keyframes fadeOut {
    50% {
      opacity: 0.5;
      transform: translateY(-15px);
    }
    100% {
      opacity: 0;
      transform: translateY(-30px);
    }
  }
`;
