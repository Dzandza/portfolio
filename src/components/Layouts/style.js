import styled from "styled-components";

export const StyledDefaultLayout = styled.div`
  background: ${({ theme }) => theme.colors.primary};
  min-height: ${({theme}) => `calc(100vh - ${theme.navbarHeight}px)`};
  display: flex;
  flex-direction: column;
  padding-top: ${({theme}) => theme.navbarHeight}px;
`;

export const CenteredContainer = styled.div`
  padding: 0 ${({ theme }) => theme.space[9]}px;
`;
