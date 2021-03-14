import styled from "styled-components";

export const StyledNavbar = styled.div`
  box-sizing: border-box;
  display: flex;
  position: fixed;
  width: 100%;
  padding: ${({ theme }) => theme.space[6]}px 0;
  height: ${({ theme }) => theme.navbarHeight}px;
  align-items: center;
  ${({ isBackgroundTransparent, theme }) =>
    isBackgroundTransparent
      ? "background: transparent;"
      : `background: ${theme.colors.secondary} !important;
         box-shadow: 0 ${theme.space[0]}px ${theme.space[2]}px ${theme.shadows.dark};`}
  transition: all 0.2s linear;

  .navbar-color {
  }
`;
