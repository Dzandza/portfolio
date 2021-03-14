import styled from "styled-components";

export const LogoWrapper = styled.div`
  & svg {
    cursor: pointer;
    position: relative;
    left: 0;
    top: 0;
    transition: all 0.2s linear;
  }

  & svg g path {
    fill: ${({ theme }) => theme.colors.ternary};
  }

  & svg:hover {
    left: -${({ theme }) => theme.space[2]}px;
    top: -${({ theme }) => theme.space[2]}px;
    -webkit-filter: drop-shadow(
      ${({ theme }) =>
        `${theme.space[2]}px ${theme.space[2]}px ${theme.space[1]}px ${theme.shadows.dark}`}
    );
    filter: drop-shadow(
      ${({ theme }) =>
        `${theme.space[2]}px ${theme.space[2]}px ${theme.space[1]}px ${theme.shadows.dark}`}
    );
  }

  & svg:active {
    transition: all 0.1s linear;
    left: -${({ theme }) => theme.space[1]}px;
    top: -${({ theme }) => theme.space[1]}px;
    -webkit-filter: drop-shadow(
      ${({ theme }) =>
        `${theme.space[1]}px ${theme.space[1]}px ${theme.space[1]}px ${theme.shadows.dark}`}
    );
    filter: drop-shadow(
      ${({ theme }) =>
        `${theme.space[1]}px ${theme.space[1]}px ${theme.space[1]}px ${theme.shadows.dark}`}
    );
  }
`;
