import React, { useState, useEffect } from "react";
import { CenteredContainer } from "../Layouts";
import Logo from "../Logo";
import { StyledNavbar } from "./style";

const Navbar = () => {
  const [isBackgroundTransparent, setBackgroundTransparent] = useState(true);
  const [scrollListener, setScrollListener] = useState(null);

  useEffect(() => {
    setScrollListener(
      document.addEventListener("scroll", () => {
        setBackgroundTransparent(document.scrollingElement.scrollTop === 0);
      })
    );

    return document.removeEventListener("scroll", scrollListener);
    // eslint-disable-next-line
  }, []);

  return (
    <StyledNavbar isBackgroundTransparent={isBackgroundTransparent}>
      <CenteredContainer>
        <Logo />
      </CenteredContainer>
    </StyledNavbar>
  );
};

export default Navbar;
